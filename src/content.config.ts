import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
    projectType: z.enum(['client', 'internal', 'employment', 'concept']).default('concept'),
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
    /**
     * Work-page filter taxonomy (2026 redesign). Distinct from
     * `category` above — a fixed 6-value vocabulary that drives the
     * /work filter chips and their live counts. Optional so draft
     * entries (e.g. digitt-plus, hidden via draft: true) don't need
     * it; every published entry should set it.
     */
    categories: z
      .array(
        z.enum([
          'AI',
          'Web app / SaaS',
          'Mobile apps',
          'Web design',
          'UX research',
          'Design systems',
        ])
      )
      .optional(),
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
    externalUrl: z.url().optional(),
  }),
});

export const collections = { work };
