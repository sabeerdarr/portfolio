import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@/config/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf()
  );

  return rss({
    title: `Writing — ${site.name}`,
    description: site.newsletter.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `/writing/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>en</language>',
  });
}
