import { Post } from "@/types/post";

export const formatNotionPost = (post: any): Post => ({
  title: post.properties.title.title[0].plain_text,
  date: post.properties.date.date.start,
  id: post.id,
  slug: post.url,
  excerpt: post.properties.excerpt.rich_text[0].plain_text,
  image: post.cover?.file?.url || "",
});
