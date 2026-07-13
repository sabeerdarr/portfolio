# SEO checklist

What's implemented, what to verify before launch, and what to do after.

## Implemented in the codebase

- [x] Unique `<title>` and meta description per page (via `SEOHead`)
- [x] Canonical URLs on every page, always `https://sabeerdarr.com/...`
      (never localhost or preview hosts)
- [x] Open Graph tags (type, title, description, url, image + dimensions)
- [x] Twitter/X `summary_large_image` card tags
- [x] `article:published_time` / `modified_time` on posts and case studies
- [x] JSON-LD structured data:
  - Person + WebSite (homepage)
  - ProfilePage (About)
  - Blog (Writing index)
  - BlogPosting + BreadcrumbList (articles)
  - CreativeWork + BreadcrumbList (case studies)
  - No ratings, reviews, or invented organisations — by design
- [x] `sitemap-index.xml` generated at build (linked from robots.txt)
- [x] `robots.txt` allowing all crawlers
- [x] RSS feed at `/rss.xml`
- [x] Semantic HTML with one `<h1>` per page and ordered heading levels
- [x] Clean, stable URLs (`/work/slug/`, `/writing/slug/`)
- [x] Breadcrumb navigation on case studies, articles, category pages
- [x] `noindex` on the 404 and privacy pages
- [x] Drafts excluded from build, sitemap, and RSS
- [x] Web manifest + favicons

## Before launch

- [ ] Replace `/images/social/og-default.png` with a real 1200×630 image
      (the shipped one is a generated placeholder)
- [ ] Replace placeholder social profile URLs in `src/config/site.ts`
      (they feed `sameAs` in structured data)
- [ ] Replace the placeholder email with the real one
- [ ] Review every page title/description once real content is in
- [ ] Replace sample case studies — search engines shouldn't index
      fictional projects as if they were client work (they're labelled,
      but real work ranks and converts better)

## After launch

- [ ] Add the site to **Google Search Console** (verify via DNS TXT record)
      and submit `https://sabeerdarr.com/sitemap-index.xml`
- [ ] Add to **Bing Webmaster Tools** (imports from Search Console)
- [ ] Validate structured data: https://search.google.com/test/rich-results
- [ ] Validate social cards: LinkedIn Post Inspector, and paste the URL in
      Slack/WhatsApp to eyeball the preview
- [ ] Run Lighthouse (Chrome DevTools) on `/`, one case study, one article —
      target 95+ in all categories
- [ ] Check `https://sabeerdarr.com/robots.txt` and the sitemap resolve in
      production
- [ ] Confirm www redirects to the apex domain

## Ongoing

- Every new article: descriptive title (search intent, not cleverness),
  compelling description under ~155 chars, one clear `h1`, internal links
  to related case studies/services.
- Update `updatedDate` when you meaningfully revise a post.
- Don't add schema types the content can't support.
