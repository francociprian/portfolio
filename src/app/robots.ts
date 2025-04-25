import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/api'],
    },
    sitemap: 'https://francociprian.com/sitemap.xml',
    host: 'https://francociprian.com', // Opcional pero recomendado
  };
}