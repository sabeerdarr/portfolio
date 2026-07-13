# Content guide

How to edit everything on sabeerdarr.com without touching component code.
After any change: `npm run build` locally (or just push — CI builds too).

## Personal details, navigation, socials, availability

Everything lives in **`src/config/site.ts`**:

- **Email / location / time zone** — edit the obvious fields.
- **Availability** — set `availability.status` to `'available' | 'limited' | 'unavailable'`
  and adjust `label`/`message`. The header badge, footer, homepage, and About
  page all update automatically.
- **Social profiles** — replace the `REPLACE-WITH-PROFILE` URLs; delete entries
  you don't use. Footer, About, and JSON-LD update automatically.
- **SEO defaults** — `seo.defaultTitle`, `defaultDescription`, `defaultSocialImage`.

## Case studies (`src/content/work/`)

### Add a project

1. Create `src/content/work/my-project.mdx` (the filename becomes the URL slug).
2. Copy the frontmatter block from an existing case study and fill it in.
   Required fields: `title`, `summary`, `coverAlt`, `category`, `role`,
   `duration`, `platform`, `outcomeSummary`, `publishedDate`.
3. Set `projectType` honestly: `'client' | 'internal' | 'concept'` — it renders
   as a visible label.
4. Write the body. Available MDX components (no import needed):
   `<Figure>`, `<Callout>`, `<Quote>`, `<MetricCard>`, `<ImageComparison>`.

### Edit / reorder / feature / hide

- **Edit**: change the file; the build picks it up.
- **Reorder**: lower `order` numbers appear first.
- **Feature on homepage**: `featured: true` (first three by `order` show; the
  first renders large).
- **Hide as draft**: `draft: true` — it will not build, appear in listings,
  the sitemap, or RSS.

### Metrics honesty rule

`<MetricCard>` renders an "unverified sample" tag unless you pass
`verified={true}`. Only set that after you can source the number.

## Articles (`src/content/blog/`)

### Add a post

1. Create `src/content/blog/my-post.md` (or `.mdx` if you need components).
2. Frontmatter minimum:

```yaml
---
title: 'Post title'
description: 'One or two sentences; used on cards and in meta tags.'
publishedDate: 2026-08-01
category: 'Product Design' # must be one of the categories below
draft: true # flip to false to publish
---
```

3. Categories: UX Strategy, Product Design, Design Systems, UX Research,
   Freelancing, Remote Collaboration, Career, Case Study Notes.
   (To add one, extend `BLOG_CATEGORIES` in `src/content.config.ts` —
   category archive pages generate automatically.)
4. Optional: `tags`, `featured` (pins it as the Writing page lead),
   `featuredImage` + `featuredImageAlt`, `updatedDate`, `canonicalUrl`
   (for syndicated posts).

### Update a post

Edit the file; add `updatedDate: YYYY-MM-DD` so readers (and structured data)
see the revision date.

Reading time is calculated automatically. The RSS feed and sitemap include
every non-draft post automatically.

## Images

See **PROJECT_REPLACEMENT_GUIDE.md** for dimensions, formats, naming, and
exactly which placeholder files to replace.

## Resume

- Put the PDF at `public/resume/sabeer-darr-resume.pdf` (exact name).
- While the file is missing, download buttons automatically become
  "request by email" links — nothing 404s.
- Update the on-page resume content in `src/pages/resume.astro` — every
  placeholder is marked with `[square brackets]` or a labelled callout.

## Testimonials and proof

The homepage "Proof" section intentionally shows a placeholder notice.
When you have a real, permission-cleared quote, render `TestimonialCard`
in `src/pages/index.astro`:

```astro
<TestimonialCard
  quote="What they actually said."
  name="Full Name"
  attribution="Role, Company"
/>
```

Never invent quotes, logos, or numbers — the site's credibility depends on it.

## Forms, newsletter, analytics

Set environment variables (see `.env.example` and README). No code changes
needed; unconfigured features show honest fallbacks.

## Deploying changes

```bash
git add -A
git commit -m "Describe the change"
git push
```

GitHub Actions builds and deploys automatically (1–2 minutes).
