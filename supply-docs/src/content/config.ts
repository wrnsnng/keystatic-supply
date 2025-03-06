// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

const components = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['inputs', 'navigation', 'layout', 'feedback', 'data-display', 'overlays']),
    status: z.enum(['planned', 'in-progress', 'completed']),
  }),
});

export const collections = { posts, components };
