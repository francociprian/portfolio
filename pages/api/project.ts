import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from "next-sanity";

export default async function project(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    try {
      const project = await loadData();

    res.status(200).json({
      project
    });

  } catch (error) {
    res.status(500).json({
      error: 'Error getting project data'
    });
  }
}

export async function loadData() {
  try {
    const query = groq`
      *[_type == "project"] | order(publishedAt asc) {
        _id, 
        title, 
        slug,
      }`;
    const project = await client.fetch(query);
    return {
      project
    };
  } catch (error) {
    throw new Error('Error getting project data')
  }
}