import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogShell from '@/components/BlogShell';
import CoverImage from '@/components/CoverImage';
import { getPost, getPosts, formatDate } from '@/lib/posts';

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ForConnect`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{ url: post.cover }, { url: '/og-image.png' }],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const others = getPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl pt-10">
        <a href="/blog" className="text-sm text-gray-400 transition hover:text-[#00F0FF]">&larr; Svi članci</a>
        <div className="mt-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="text-[#00F0FF]">{post.category}</span>
          <span>{formatDate(post.date)}</span>
          <span>{post.readMinutes} min čitanja</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">{post.title}</h1>
        <CoverImage src={post.cover} alt={post.title} className="mt-8 h-[260px] w-full rounded-2xl border border-cyan-500/20 md:h-[360px]" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-200">
          {post.content.map((b, i) => {
            if (b.type === 'h2') return <h2 key={i} className="pt-4 text-2xl font-bold text-white">{b.text}</h2>;
            if (b.type === 'ul')
              return (
                <ul key={i} className="space-y-2 pl-1">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-3"><span className="mt-1 text-[#00F0FF]">&#8226;</span><span>{it}</span></li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 to-slate-900 p-6 shadow-[0_0_25px_#00F0FF22]">
          <h2 className="text-xl font-bold">Hajde da čujete kako zvuči</h2>
          <p className="mt-2 text-sm text-gray-300">Javite nam čime se bavite i pokazaćemo vam kako bi asistent radio u vašem poslu.</p>
          <a href="/#demo" className="mt-4 inline-block rounded-full bg-[#00F0FF] px-6 py-3 font-semibold text-[#020617] shadow-[0_0_15px_#00F0FF55] transition hover:bg-[#66F6FF]">
            Zatražite demo
          </a>
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-semibold">Pročitajte i</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {others.map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border border-gray-800 bg-[#020617]/70 p-4 transition hover:border-[#00F0FF]">
                  <div className="text-xs text-gray-400">{p.category} &middot; {formatDate(p.date)}</div>
                  <div className="mt-1 font-semibold">{p.title}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </BlogShell>
  );
}
