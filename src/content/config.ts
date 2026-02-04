import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    coverImage: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
