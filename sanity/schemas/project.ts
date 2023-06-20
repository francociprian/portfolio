import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'string',
    }),
    defineField({
      name: 'deploy',
      title: 'Deploy',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: "imageMain",
      title: "Image Main",
      type: "cloudinary.asset",
      description: "Image Main",
    }),
    defineField({
      name: "imageMain2",
      title: "Image Main 2",
      type: "cloudinary.asset",
      description: "Image Main 2",
    }),
    defineField({
      name: "imageMain3",
      title: "Image Main 3",
      type: "cloudinary.asset",
      description: "Image Main 3",
    }),
    defineField({
      name: "imageMobile",
      title: "Image Mobile",
      type: "cloudinary.asset",
      description: "Image Mobile",
    }),
    defineField({
      name: "imageMobile2",
      title: "Image Mobile 2",
      type: "cloudinary.asset",
      description: "Image Mobile 2",
    }),
    defineField({
      name: "imageMobile3",
      title: "Image Mobile 3",
      type: "cloudinary.asset",
      description: "Image Mobile 3",
    })
  ],
})
