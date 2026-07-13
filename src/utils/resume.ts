import fs from 'node:fs';
import path from 'node:path';
import { site } from '@/config/site';

/**
 * Build-time check for the resume PDF. Runs only during static
 * generation (never in the browser), so using node:fs is safe.
 *
 * When the file is missing we log a development warning and the
 * resume page renders an email fallback instead of a broken link.
 */
export function resumePdfExists(): boolean {
  const publicPath = path.join(process.cwd(), 'public', site.resumePath);
  const exists = fs.existsSync(publicPath);
  if (!exists && import.meta.env.DEV) {
    console.warn(
      `[resume] No PDF found at public${site.resumePath} — the download link is hidden. ` +
        'Add the file to enable it (see CONTENT_GUIDE.md).'
    );
  }
  return exists;
}
