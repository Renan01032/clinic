import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const baseUrl = site.seo.url.startsWith('http') ? site.seo.url : 'https://example.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
