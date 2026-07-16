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
    alt: 'Siri Paye Meadows',
    caption: 'Siri Paye Meadows',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-02.jpg',
    alt: 'Rakaposhi Mountain - First Light',
    caption: 'Rakaposhi Mountain from Eagles Nest - First Light',
    orientation: 'portrait',
  },
  {
    src: '/images/photography/placeholder-03.jpg',
    alt: 'Blue Lake - Naltar Valley',
    caption: 'Blue Lake - Naltar Valley',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-04.jpg',
    alt: 'Katora Lake aka Bowl Lake - Jaaz Banda - Kumrat',
    caption: 'Katora Lake aka Bowl Lake - Jaaz Banda - Kumrat',
    orientation: 'portrait',
  },
  {
    src: '/images/photography/placeholder-05.jpg',
    alt: 'China Market - Bukit Bintang - Kuala Lumpur,Malaysia',
    caption: 'China Market - Bukit Bintang - Kuala Lumpur,Malaysia',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-06.jpg',
    alt: 'God Rays - Sunset at Babusar Top',
    caption: 'God Rays - Sunset at Babusar Top',
    orientation: 'landscape',
  },
  {
    src: '/images/photography/placeholder-07.jpg',
    alt: 'Cenang Beach - Langkawi',
    caption: 'Cenang Beach - Langkawi',
    orientation: 'landscape',
  },
];
