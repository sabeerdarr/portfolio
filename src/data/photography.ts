/**
 * Photography gallery data. Add a photo by dropping the file into
 * public/images/photography/ and adding an entry here — newest first
 * is a nice habit, but any order works (the page renders this order).
 *
 * Fields:
 *  - src: path under /images/photography/
 *  - alt: what's in the picture, for people who can't see it (required)
 *  - caption: optional — where/when/what, shown under the photo
 *  - orientation: 'landscape' | 'portrait' — controls layout size hints
 *
 * The entries below are generated placeholders. Replace them with
 * real shots (see CONTENT_GUIDE.md → Photography).
 */

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
  orientation: 'landscape' | 'portrait';
}

export const photos: Photo[] = [
  {
    src: '/images/photography/placeholder-01.jpg',
    alt: 'Placeholder frame — replace with a real photograph',
    caption: 'Placeholder — swap with a real shot',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-02.jpg',
    alt: 'Placeholder frame — replace with a real photograph',
    caption: 'Placeholder — swap with a real shot',
    orientation: 'portrait',
  },
  {
    src: '/images/photography/placeholder-03.jpg',
    alt: 'Placeholder frame — replace with a real photograph',
    caption: 'Placeholder — swap with a real shot',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-04.jpg',
    alt: 'Placeholder frame — replace with a real photograph',
    caption: 'Placeholder — swap with a real shot',
    orientation: 'portrait',
  },
  {
    src: '/images/photography/placeholder-05.jpg',
    alt: 'Placeholder frame — replace with a real photograph',
    caption: 'Placeholder — swap with a real shot',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-06.jpg',
    alt: 'Placeholder frame — replace with a real photograph',
    caption: 'Placeholder — swap with a real shot',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-07.jpg',
    alt: 'Placeholder frame — replace with a real photograph',
    caption: 'Placeholder — swap with a real shot',
    orientation: 'landscape',
  },
];
