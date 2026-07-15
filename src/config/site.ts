/**
 * Central site configuration — the single source of truth for
 * personal details, navigation, social profiles, availability,
 * integrations, and default SEO metadata.
 *
 * Edit THIS file (and .env) to update the site. Components never
 * hard-code personal information.
 */

export type AvailabilityStatus = 'available' | 'limited' | 'unavailable';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialProfile {
  label: string;
  /** Replace placeholder URLs before launch. Remove entries you do not use. */
  url: string;
}

export const site = {
  name: 'Sabeer Darr',
  /** Professional title shown in the header, footer, and metadata. */
  title: 'UI/UX & Product Designer',
  domain: 'sabeerdarr.com',
  url: 'https://sabeerdarr.com',

  /** PLACEHOLDER — replace with the real public contact address. */
  email: 'hello@sabeerdarr.com',

  /** PLACEHOLDER — replace with real location and time zone. */
  location: 'Remote — based in Srinagar, India',
  timeZone: 'UTC+5:30 (IST)',
  /** Overlap statement used on Services and About. Adjust to reality. */
  timeZoneOverlap: 'Comfortable overlapping with European and US-East working hours.',

  availability: {
    status: 'available' as AvailabilityStatus,
    /** Short label used in the header badge and footer. */
    label: 'Available for work',
    /** Longer sentence used on the homepage and About page. */
    message: 'Available for remote product design roles and selected freelance collaborations.',
  },

  /**
   * Social profiles. PLACEHOLDER URLS — replace each with the real
   * profile URL, or delete entries that do not apply. Everything that
   * consumes this list (footer, about, structured data) updates
   * automatically.
   */
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/REPLACE-WITH-PROFILE' },
    { label: 'Behance', url: 'https://www.behance.net/REPLACE-WITH-PROFILE' },
    { label: 'Dribbble', url: 'https://dribbble.com/REPLACE-WITH-PROFILE' },
    { label: 'GitHub', url: 'https://github.com/REPLACE-WITH-PROFILE' },
  ] satisfies SocialProfile[],

  /** Form endpoints come from environment variables — see .env.example. */
  forms: {
    employmentFormId: import.meta.env.PUBLIC_FORMSPREE_EMPLOYMENT_FORM_ID ?? '',
    freelanceFormId: import.meta.env.PUBLIC_FORMSPREE_FREELANCE_FORM_ID ?? '',
  },

  newsletter: {
    /** Provider-neutral form action URL; empty string disables the form. */
    actionUrl: import.meta.env.PUBLIC_NEWSLETTER_ACTION_URL ?? '',
    description:
      'Practical UX notes, case-study breakdowns, and design resources—sent occasionally.',
  },

  analytics: {
    /** Cloudflare Web Analytics token; empty string disables analytics. */
    cloudflareToken: import.meta.env.PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN ?? '',
  },

  /** Public path of the downloadable resume PDF (place the file in public/resume/). */
  resumePath: '/resume/sabeer-darr-resume.pdf',

  seo: {
    /** Used when a page does not define its own title. */
    defaultTitle: 'Sabeer Darr — UI/UX & Product Designer',
    titleTemplate: '%s — Sabeer Darr',
    defaultDescription:
      'Sabeer Darr is a UI/UX and product designer helping teams turn complex requirements into clear, useful SaaS and mobile experiences. Available for remote roles and selected freelance work.',
    /**
     * Default social sharing image. The shipped file is a generated
     * placeholder — replace it with a real 1200×630 PNG or JPG
     * (see PROJECT_REPLACEMENT_GUIDE.md).
     */
    defaultSocialImage: '/images/social/og-default.png',
  },

  /**
   * Primary navigation. Services, About, Contact, Writing and Resume are hidden for
   * now — the pages still exist at their URLs (noindexed) and can be
   * restored by adding them back here and in footerLinks.
   */
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Photography', href: '/photography' },
  ] satisfies NavItem[],

  footerLinks: {
    site: [
      { label: 'Work', href: '/work' },
      { label: 'Photography', href: '/photography' },
    ] satisfies NavItem[],
    legal: [] as NavItem[],
  },
} as const;

export type SiteConfig = typeof site;
