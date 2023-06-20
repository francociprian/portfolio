import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { RocketIcon } from '@sanity/icons';
import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

export default defineConfig({
  basePath: '/studio',
  title: 'Portfolio Franco Ciprian',
  icon: RocketIcon,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    cloudinarySchemaPlugin(),
    cloudinaryAssetSourcePlugin(),
  ],
});