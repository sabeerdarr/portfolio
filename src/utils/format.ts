/** Shared formatting helpers. */

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** "12 March 2026" — readable in prose and metadata. */
export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

/** ISO date for <time datetime> and structured data. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}

/** URL-safe slug for category archive routes. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
