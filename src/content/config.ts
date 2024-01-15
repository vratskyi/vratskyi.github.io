// Example: A cheatsheet of many common Zod datatypes
import { z, defineCollection } from 'astro:content';

const postsCollections = defineCollection({
  schema: ({ image }) => z.object({ 
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string().optional(),
    image: image(),
    author: z.string().default('Oleksii'),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).default('uncategorized'),
    publishDate: z.string(),
  })
})
export const collections = {
  posts: postsCollections,
};
