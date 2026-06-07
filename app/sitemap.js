import { site } from '@/lib/site';

export default function sitemap() {
  const routes = ['', '/services', '/about', '/booking', '/faq', '/contact'];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
