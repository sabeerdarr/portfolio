// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Canonical production URL. GitHub Pages serves this site at the custom
// apex domain, so no `base` path is required.
export default defineConfig({
  site: 'https://sabeerdarr.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap({
      // The 404 route is excluded from sitemaps automatically by Astro.
      // Draft content never builds, so it can never leak into the sitemap.
      // Services/About/Resume are hidden for now (kept out of nav and
      // noindexed) — keep them out of the sitemap too.
      filter: (page) =>
        !['/services/', '/about/', '/resume/'].some((hidden) => page.endsWith(hidden)),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
