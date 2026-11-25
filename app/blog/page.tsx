import type { Metadata } from 'next';
import BlogShell from '@/components/BlogShell';
import CoverImage from '@/components/CoverImage';
import { getPosts, formatDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | ForConnect',
  description: 'Saveti za prodavnice, salone, ordinacije i servise: kako da nijedan poziv ne ostane bez odgovora.',
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <BlogShell>
      <section className="pt-12">
        <h1 className="text-3xl font-bold lg:text-4xl">Blog</h1>
        <p className="mt-3 max-w-2xl text-gray-300">
          Saveti za prodavnice, salone, ordinacije i servise: kako da nijedan poziv ne ostane bez odgovora.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-[#020617]/70 transition-all duration-300 hover:border-[#00F0FF] hover:shadow-[0_0_25px_#00F0FF33]"
            >
              <CoverImage src={p.cover} alt={p.title} className="h-[180px] w-full" />
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="text-[#00F0FF]">{p.category}</span>
                  <span>{formatDate(p.date)}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-gray-400">{p.excerpt}</p>
                <p className="mt-3 text-xs text-gray-500">{p.readMinutes} min čitanja</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </BlogShell>
  );
}
