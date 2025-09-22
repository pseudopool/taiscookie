import { sanityFetch } from "@/libs/sanity/live";

import { Post as PostType } from "@/types/post";
import Post from "./post";
import { allPostsQuery } from "@/libs/sanity/queries";
import { AllPostsQueryResult } from "@/libs/sanity/sanity.types";

const Posts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });
  const allPosts = sanityDataToPosts(data);

  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {allPosts.map((post: PostType, index: number) => (
        <Post key={post.id} post={post} index={allPosts.length - index - 1} />
      ))}
    </ul>
  );
};

export default Posts;

const sanityDataToPosts = (sanityData: AllPostsQueryResult): PostType[] =>
  sanityData.map((item) => ({
    title: item.title,
    date: item.date,
    id: item._id,
    url: item.slug,
    excerpt: item.excerpt || "",
  }));
