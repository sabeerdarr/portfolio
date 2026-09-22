/**
 * Photography gallery data. Add a photo by dropping the file into
 * public/images/photography/ and adding an entry here — newest first
 * is a nice habit, but any order works (the page renders this order).
 *
 * Fields:
 *  - src: path under /images/photography/
 *  - alt: what's in the picture, for people who can't see it (required)
 *  - caption: optional — where/when/what, shown under the photo
 *  - width / height: the file's real pixel dimensions — used as the
 *    <img> width/height attributes so the browser reserves the
 *    correct space before the image loads (prevents layout shift).
 *    Wrong values here don't break the display (CSS still sizes the
 *    image by its real aspect ratio once loaded), just the pre-load
 *    space reservation, so keep them accurate when swapping photos.
 *  - orientation: 'landscape' | 'portrait' — used only for the
 *    masonry column CSS hook, derived from width/height.
 */

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

const rawPhotos: Omit<Photo, 'orientation'>[] = [
  {
    src: '/images/photography/placeholder-01.webp',
    alt: 'Siri Paye Meadows',
    caption: 'Siri Paye Meadows',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/photography/placeholder-02.webp',
    alt: 'Rakaposhi Mountain - First Light',
    caption: 'Rakaposhi Mountain from Eagles Nest - First Light',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/photography/placeholder-03.webp',
    alt: 'Blue Lake - Naltar Valley',
    caption: 'Blue Lake - Naltar Valley',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/photography/placeholder-04.webp',
    alt: 'Katora Lake aka Bowl Lake - Jaaz Banda - Kumrat',
    caption: 'Katora Lake aka Bowl Lake - Jaaz Banda - Kumrat',
    width: 1600,
    height: 898,
  },
  {
    src: '/images/photography/placeholder-05.webp',
    alt: 'China Market - Bukit Bintang - Kuala Lumpur,Malaysia',
    caption: 'China Market - Bukit Bintang - Kuala Lumpur,Malaysia',
    width: 1200,
    height: 1600,
  },
  {
    src: '/images/photography/placeholder-06.webp',
    alt: 'God Rays - Sunset at Babusar Top',
    caption: 'God Rays - Sunset at Babusar Top',
    width: 1200,
    height: 1600,
  },
  {
    src: '/images/photography/placeholder-07.webp',
    alt: 'Cenang Beach - Langkawi',
    caption: 'Cenang Beach - Langkawi',
    width: 1200,
    height: 1600,
  },
];

export const photos: (Photo & { orientation: 'landscape' | 'portrait' })[] = rawPhotos.map(
  (photo) => ({
    ...photo,
    orientation: photo.height > photo.width ? 'portrait' : 'landscape',
  })
);
