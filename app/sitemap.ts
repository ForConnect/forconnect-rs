import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/posts';
import { CONFIG } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = CONFIG.siteUrl;
  return [
    { url: base },
    { url: `${base}/blog` },
    ...getPosts().map((p) => ({ url: `${base}/blog/${p.slug}` })),
  ];
}
