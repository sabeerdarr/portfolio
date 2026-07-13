# sabeerdarr.com

Portfolio and writing site for **Sabeer Darr — UI/UX & Product Designer**.
Built with Astro, TypeScript, and plain modern CSS. Statically generated,
hosted free on GitHub Pages at the custom domain **https://sabeerdarr.com**.

## Technology stack

| Layer      | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | [Astro](https://astro.build) 5, static output     |
| Language   | TypeScript (strict)                               |
| Content    | Astro Content Collections (Markdown + MDX)        |
| Styling    | Plain CSS with design tokens (custom properties)  |
| Fonts      | Fraunces (self-hosted, SIL OFL) + system fonts    |
| Forms      | Formspree-compatible (optional, env-configured)   |
| Analytics  | Cloudflare Web Analytics (optional, off default)  |
| Feeds      | RSS via @astrojs/rss, sitemap via @astrojs/sitemap|
| Hosting    | GitHub Pages + GitHub Actions                     |

Client-side JavaScript is minimal: theme toggle, mobile menu, and progressive
form enhancement. Everything works without JavaScript.

## Prerequisites

- Node.js 20+ (22 LTS recommended) and npm

> On this machine Node was installed to `~/.local/node` and added to PATH in
> `~/.zshrc`. Open a new terminal for `node`/`npm` to be available.

## Installation

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
npm install
```

## Local development

```bash
npm run dev        # dev server at http://localhost:4321
```

## Build commands

```bash
npm run build          # production build into dist/
npm run preview        # serve the production build locally
npm run check          # TypeScript + Astro diagnostics
npm run format         # format with Prettier
npm run format:check   # verify formatting (CI-friendly)
```

## Folder structure

```
src/
  components/
    common/        # Button, Callout, Figure, Quote, MetricCard, …
    navigation/    # SiteHeader (incl. mobile menu), SiteFooter
    cards/         # ProjectCard, ArticleCard, ServiceCard, TestimonialCard
    sections/      # ProcessSteps, FinalCTA, RelatedContent
    forms/         # ContactForm, NewsletterForm
    seo/           # SEOHead (metadata + JSON-LD)
  config/site.ts   # ← central configuration (edit this, not components)
  content/
    work/          # case studies (.mdx)
    blog/          # articles (.md/.mdx); draft: true keeps them unpublished
  layouts/         # BaseLayout, CaseStudyLayout, BlogPostLayout
  pages/           # routes (file-based)
  styles/          # tokens.css (design tokens), global.css
  utils/           # readingTime, formatting, schema.org builders
public/
  CNAME            # custom-domain file for GitHub Pages (sabeerdarr.com)
  fonts/           # self-hosted Fraunces
  images/          # placeholder images — replace (see PROJECT_REPLACEMENT_GUIDE.md)
  resume/          # put sabeer-darr-resume.pdf here to enable downloads
.github/workflows/deploy.yml   # build + deploy to GitHub Pages
```

## Content management

Day-to-day editing never touches component code:

- **Personal details, navigation, socials, availability** → `src/config/site.ts`
- **Case studies** → add/edit files in `src/content/work/` (see CONTENT_GUIDE.md)
- **Articles** → add/edit files in `src/content/blog/`; set `draft: false` to publish
- **Images** → drop into `public/images/…` (dimensions in PROJECT_REPLACEMENT_GUIDE.md)
- **Resume PDF** → `public/resume/sabeer-darr-resume.pdf`

Frontmatter is validated by a typed schema (`src/content.config.ts`); missing
required fields fail the build with a clear message.

## Environment variables

All optional — the site builds and degrades gracefully without them.
Copy `.env.example` to `.env` for local use; set them as **repository
variables** in GitHub for production (they're referenced in `deploy.yml`).

| Variable | Purpose |
| --- | --- |
| `PUBLIC_FORMSPREE_EMPLOYMENT_FORM_ID` | Enables the employment contact form |
| `PUBLIC_FORMSPREE_FREELANCE_FORM_ID`  | Enables the freelance contact form |
| `PUBLIC_NEWSLETTER_ACTION_URL`        | Enables the newsletter signup form |
| `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN`   | Enables analytics (production only) |

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which type-checks,
builds, and deploys to GitHub Pages. Full instructions, including custom
domain and DNS setup: **[DEPLOYMENT.md](DEPLOYMENT.md)**.

## Form configuration

1. Create two forms at [formspree.io](https://formspree.io) (free tier works).
2. Copy each form's ID (the code after `/f/` in its endpoint).
3. Set the two `PUBLIC_FORMSPREE_*` variables locally and in GitHub.
4. Rebuild/redeploy. Until then, the contact page shows a direct-email fallback.

## Analytics configuration

1. Add the site in Cloudflare Web Analytics (free, no cookies).
2. Copy the beacon token into `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN`.
3. The script loads **only in production builds** and only when the token exists.

## Testing

- `npm run check` — type safety and template diagnostics
- `npm run build` — catches content-schema and routing errors
- Manual checklist: keyboard navigation, mobile menu, both themes,
  320–1440 px widths (see SEO_CHECKLIST.md for the pre-launch list)

## Accessibility

Targets WCAG 2.2 AA practices: semantic landmarks, skip link, visible focus,
AA contrast in both themes, labelled forms with live-region status messages,
reduced-motion support. See `/accessibility` on the site for the statement.

## Performance

Static HTML, ~zero blocking JS, one preloaded 67 KB variable font subset,
dimensioned images with lazy loading below the fold. No third-party requests
unless analytics is enabled.

## License considerations

- Code: yours; add a LICENSE file if you plan to open-source it.
- Fraunces font: SIL Open Font License 1.1.
- Sample case-study and article text: replace with your own before launch —
  it's written as clearly-labelled placeholder content.
