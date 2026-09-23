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
  title: 'Product Designer',
  domain: 'sabeerdarr.com',
  url: 'https://sabeerdarr.com',

  email: 'sabeer.darr.93@gmail.com',

  location: 'Lahore, Pakistan',
  timeZone: 'UTC+5 (PKT)',
  timeZoneOverlap: 'Comfortable overlapping with European and US-East working hours.',

  availability: {
    status: 'available' as AvailabilityStatus,
    /** Short label — no longer shown as a standalone badge (2026
     * redesign dropped the repeated status pill), kept for any
     * future use that wants a compact form. */
    label: 'Available for select work',
    /** Longer sentence folded into the homepage hero lede. */
    message: 'Available for select work.',
  },

  /**
   * Social profiles. Everything that consumes this list (footer,
   * about, structured data) updates automatically.
   */
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sabeerdarr' },
  ] satisfies SocialProfile[],

  /** Form endpoints come from environment variables — see .env.example. */
  forms: {
    employmentFormId: import.meta.env.PUBLIC_FORMSPREE_EMPLOYMENT_FORM_ID ?? '',
    freelanceFormId: import.meta.env.PUBLIC_FORMSPREE_FREELANCE_FORM_ID ?? '',
    /**
     * Home page's unified #contact form (2026 redesign). Runs on
     * FormSubmit (formsubmit.co) rather than Formspree — no account
     * needed, submissions go straight to this address once the
     * one-time confirmation email FormSubmit sends on first use is
     * clicked.
     */
    contactRecipient: 'hello@sabeerdarr.com',
  },

  /** Cal.com booking link used on the homepage #contact section. */
  bookingUrl: 'https://cal.com/sabeer-darr/30min',

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
    defaultTitle: 'Sabeer Darr — Product Designer',
    titleTemplate: '%s — Sabeer Darr',
    defaultDescription:
      'Sabeer Darr is a product designer for complex SaaS and AI products, with 10+ years of experience designing and scaling AI SaaS, B2B, and mobile products — from problem definition through design systems and delivery. Available for select work.',
    /**
     * Default social sharing image. The shipped file is a generated
     * placeholder — replace it with a real 1200×630 PNG or JPG
     * (see PROJECT_REPLACEMENT_GUIDE.md).
     */
    defaultSocialImage: '/images/social/og-default.png',
  },

  /**
   * Primary navigation. Services, Contact and Resume are hidden for
   * now — the pages still exist at their URLs (noindexed) and can be
   * restored by adding them back here and in footerLinks.
   */
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About Me', href: '/about' },
    { label: 'Photography', href: '/photography' },
  ] satisfies NavItem[],

  footerLinks: {
    site: [
      { label: 'Work', href: '/work' },
      { label: 'About Me', href: '/about' },
      { label: 'Photography', href: '/photography' },
    ] satisfies NavItem[],
    legal: [] as NavItem[],
  },
} as const;

export type SiteConfig = typeof site;
