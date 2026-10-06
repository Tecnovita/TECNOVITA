import type { MetadataRoute } from 'next';
import { subServicesContent } from '@/lib/services';

const BASE = 'https://tecnovita.com.ar';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, priority: 1 },
    { url: `${BASE}/contacto`, priority: 0.8 },
    ...Object.keys(subServicesContent).map(id => ({
      url: `${BASE}/servicios/${id}`,
      priority: 0.9,
    })),
  ];
}
