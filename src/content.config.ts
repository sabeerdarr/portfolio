import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case studies. Files live in src/content/work/ as .md or .mdx.
 * Required fields fail the build with a clear error when missing,
 * which is intentional — see CONTENT_GUIDE.md.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string().min(4, 'Case-study titles need at least 4 characters'),
    summary: z.string().min(20, 'Write a 1–2 sentence summary; it appears on cards'),
    coverImage: z.string().default('/images/work/placeholder-cover.svg'),
    coverAlt: z.string().min(4, 'Cover images need descriptive alt text'),
    projectType: z.enum(['client', 'internal', 'concept']).default('concept'),
    status: z.enum(['shipped', 'in-progress', 'concept']).default('concept'),
    featured: z.boolean().default(false),
    category: z
      .array(
        z.enum([
          'Product Design',
          'UX Research',
          'Mobile',
          'SaaS',
          'Design Systems',
          'UX Audit',
          'Concept Work',
        ])
      )
      .min(1),
    role: z.string(),
    team: z.string().optional(),
    duration: z.string(),
    platform: z.string(),
    industry: z.string().optional(),
    responsibilities: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    /** One-line outcome shown on cards. Must be verified before launch. */
    outcomeSummary: z.string(),
    keyContribution: z.string().optional(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    socialImage: z.string().optional(),
    draft: z.boolean().default(false),
    /** Lower numbers appear first on the Work page. */
    order: z.number().int().default(99),
    confidential: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

/**
 * Writing / blog posts. Files live in src/content/blog/.
 */
export const BLOG_CATEGORIES = [
  'UX Strategy',
  'Product Design',
  'Design Systems',
  'UX Research',
  'Freelancing',
  'Remote Collaboration',
  'Career',
  'Case Study Notes',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(4),
    description: z.string().min(20, 'Descriptions appear on cards and in meta tags'),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Sabeer Darr'),
    category: z.enum(BLOG_CATEGORIES),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    socialImage: z.string().optional(),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { work, blog };
