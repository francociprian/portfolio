import { client } from "@/sanity/lib/client";
import type { NextApiResponse } from 'next'

const createSitemap = ( slugs: string[] ) : string => 
`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://www.francociprian.com/${slug}`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>${slug === '' ? '1.0' : '0.8'}</priority>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

export async function getServerSideProps({res}: {res: NextApiResponse}) {
  const postSlugsQuery = `
  *[_type == "project" && defined(slug.current)][].slug.current
  `; 
  const allPosts = await client.fetch(postSlugsQuery);
  const allPages = [
    ...[
      '',
      'project',
      'contact',
      'about',  // Añadido si tienes esta página
    ],
    ...allPosts.map((slug:string) => `project/${slug}`)
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {}
  };
}

export default function Sitemap() {
  return null;
}