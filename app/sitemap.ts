import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const baseUrl = site.seo.url.startsWith('http') ? site.seo.url : 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
