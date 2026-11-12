import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import { getLocaleStaticPaths, getLocalePosts } from "@/utils/getLocalePosts";
import config from "@/config";

export const getStaticPaths = getLocaleStaticPaths;

export async function GET({ params }: APIContext) {
  const lang = params.lang as string;
  const sortedPosts = getSortedPosts(await getLocalePosts(lang));

  return rss({
    title: `${config.site.title} (${lang})`,
    description: config.site.description,
    site: config.site.url,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, lang),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
