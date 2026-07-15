# Project & image replacement guide

The site ships with three clearly-labelled **sample** case studies and
generated placeholder images. This guide is the fastest path from sample
to real.

## Replacing a sample case study

1. Open the sample, e.g. `src/content/work/saas-onboarding-redesign.mdx`.
2. Either edit it in place (keeping the section order) or duplicate it to a
   new filename — the filename is the URL slug, so name it well
   (`checkout-redesign.mdx` → `/work/checkout-redesign/`).
3. Update the frontmatter:
   - `projectType`: `'client'` or `'internal'` (only keep `'concept'` for
     genuinely speculative work — it renders a visible "Concept case study"
     label and a sample-content banner).
   - `outcomeSummary`: a real, verifiable outcome — or honest framing like
     "Shipped to production; adoption data pending".
   - `confidential: true` if the client can't be named; then write
     "Client name withheld due to confidentiality" in the body.
4. Delete the `<Callout variant="placeholder" title="Sample project">` block
   at the top of the body.
5. Replace every placeholder `<Figure>`/`<ImageComparison>` image path with
   your real images (dimensions below).
6. In `<MetricCard>`s: real numbers + `verified={true}` + a `source`,
   or delete the metrics row. Never leave sample numbers unverified-but-
   plausible-looking.
7. Delete the sample file when your real one replaces it, and check
   `featured`/`order` across the collection.

## Image dimensions and locations

| Purpose                                                    | Path                                  | Size (px)       | Format                                    |
| ---------------------------------------------------------- | ------------------------------------- | --------------- | ----------------------------------------- |
| Case-study cover (cards + hero)                            | `public/images/work/<slug>-cover.*`   | 1600×1000       | WebP or JPG                               |
| In-article wide figures                                    | `public/images/work/…`                | 1600×900–1000   | WebP or JPG                               |
| Before/after comparison images                             | `public/images/work/…`                | 1600×1000 each  | WebP or JPG                               |
| Article featured image                                     | `public/images/blog/…`                | 1200×675 (16:9) | WebP or JPG                               |
| Social-share default                                       | `public/images/social/og-default.png` | **1200×630**    | PNG or JPG (not SVG — scrapers reject it) |
| Per-page social image (optional `socialImage` frontmatter) | anywhere in `public/images/`          | 1200×630        | PNG or JPG                                |
| Profile photo                                              | `public/images/profile/…`             | 640×800 (4:5)   | WebP or JPG                               |
| Favicon                                                    | `public/favicon.svg`                  | vector          | SVG                                       |
| Apple touch icon                                           | `public/favicon/apple-touch-icon.png` | 180×180         | PNG                                       |

### Format & compression

- Prefer **WebP** (quality ~80) for photos/screenshots; JPG is fine too.
- Keep covers under ~250 KB, in-article figures under ~200 KB.
  [Squoosh](https://squoosh.app) is a good no-install compressor.
- SVG only for diagrams you author as vectors.

### Naming convention

`<project-slug>-<what>.<ext>` — e.g. `checkout-redesign-cover.webp`,
`checkout-redesign-flow-before.webp`. Lowercase, hyphens, no spaces.

### Updating frontmatter after adding an image

```yaml
coverImage: '/images/work/checkout-redesign-cover.webp'
coverAlt: 'Checkout flow screens showing the redesigned three-step payment process'
```

Alt text describes what the image shows to someone who can't see it —
content, not keywords.

### Width/height attributes

Components already set sensible `width`/`height` (preventing layout shift)
matching the table above. If you use a different aspect ratio, pass the real
dimensions to `<Figure width={…} height={…}>`.

## Placeholder files you can delete once replaced

```
public/images/work/placeholder-*.svg
public/images/work/*-cover.svg          (the three sample covers)
public/images/blog/case-study-structure-cover.svg
public/images/blog/placeholder-article-figure.svg
public/images/profile/profile-placeholder.svg
```

(Also update any frontmatter/page still pointing at them; the build will
keep working either way, but grep for the filename to be sure:
`grep -r "placeholder" src/content src/pages`.)

## Other placeholders to replace before launch

- `src/config/site.ts` — email, location, socials, availability
- `src/pages/about.astro` — bio, experience timeline, interests
- `src/pages/resume.astro` — all `[bracketed]` entries
- `public/resume/sabeer-darr-resume.pdf` — the actual PDF
- `public/images/social/og-default.png` — real social card
- Sample articles in `src/content/blog/` marked `draft: true` — finish or delete
