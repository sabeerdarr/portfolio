/**
 * Estimate reading time from raw markdown/MDX source.
 * Strips code fences, frontmatter-like blocks, HTML/JSX tags, and
 * markdown syntax before counting words at ~215 wpm.
 */
const WORDS_PER_MINUTE = 215;

export function readingTime(rawContent: string): { minutes: number; label: string } {
  const text = rawContent
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~-]/g, ' ');

  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return { minutes, label: `${minutes} min read` };
}
