import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { MetadataRoute } from 'next';

const projectsQuery = defineQuery(`*[_type == "project"] { slug { current } }`);

type SitemapItem = {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://francociprian.com';
  const now = new Date();
  
  // Páginas estáticas principales
  const routes: SitemapItem[] = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Añade aquí otras páginas importantes de tu sitio
  ];
  
  try {
    // Obtener todos los proyectos para incluirlos en el sitemap
    const projects = await client.fetch(projectsQuery);
    
    // Verificar que projects sea un array
    if (!Array.isArray(projects)) {
      console.error('Error: La respuesta de proyectos no es un array', projects);
      return routes;
    }
    
    // Crear entradas para cada proyecto con comprobación tipo segura
    const projectUrls: SitemapItem[] = [];
    
    projects.forEach((project: { slug?: { current?: string } }) => {
      // Verificar que cada proyecto tenga una slug válida
      if (project?.slug?.current) {
        projectUrls.push({
          url: `${baseUrl}/projects/${project.slug.current}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      } else {
        console.warn('Advertencia: Proyecto sin slug válido encontrado', project);
      }
    });
    
    return [...routes, ...projectUrls];
  } catch (error) {
    console.error('Error al obtener proyectos para el sitemap:', error);
    // En caso de error, devolver al menos las rutas estáticas
    return routes;
  }
}