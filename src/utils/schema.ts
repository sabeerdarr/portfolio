import { site } from '@/config/site';

/**
 * JSON-LD builders. Only factually supportable schema is emitted —
 * no ratings, reviews, or invented organisations.
 */

export function personSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: site.socials.map((s) => s.url),
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.seo.defaultTitle,
    url: site.url,
    description: site.seo.defaultDescription,
    publisher: { '@type': 'Person', name: site.name },
  };
}

export function profilePageSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema(),
    url: new URL('/about', site.url).href,
  };
}

export function blogSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Writing — ${site.name}`,
    url: new URL('/writing', site.url).href,
    author: { '@type': 'Person', name: site.name, url: site.url },
  };
}

export function blogPostingSchema(options: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedDate: Date;
  updatedDate?: Date;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: options.title,
    description: options.description,
    url: options.url,
    image: new URL(options.image, site.url).href,
    datePublished: options.publishedDate.toISOString(),
    ...(options.updatedDate && { dateModified: options.updatedDate.toISOString() }),
    author: { '@type': 'Person', name: site.name, url: site.url },
  };
}

export function creativeWorkSchema(options: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedDate: Date;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: options.title,
    description: options.description,
    url: options.url,
    image: new URL(options.image, site.url).href,
    datePublished: options.publishedDate.toISOString(),
    creator: { '@type': 'Person', name: site.name, url: site.url },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}
