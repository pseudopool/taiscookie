import { fetchPosts } from "@/apis/fetchPosts";
import { formatNotionPost } from "@/libs/presenter";
import { Post } from "@/types/post";
import { MetadataRoute } from "next/types";

export async function generateSitemaps() {
  const ids = await fetchPosts().then((res: any) =>
    res.results.map((post: any) => ({ id: post.id }))
  );
  return ids;
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const allPosts = await fetchPosts().then((res: any) =>
    res.results.map((post: any) => formatNotionPost(post))
  );

  return allPosts.map((post: Post) => ({
    url: `https://taiscookie.vercel.app/posts/${post.id}`,
    lastModified: new Date(post.date).toISOString(),
  }));
}
