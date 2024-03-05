import { fetchPosts } from "@/apis/fetchPosts";
import { formatNotionPost } from "@/libs/formatNotionPost";
import { Post as PostType } from "@/types/post";
import Post from "./post";

const Posts = async () => {
  const allPosts = await fetchPosts().then((res) =>
    res.results.map((post: any) => formatNotionPost(post))
  );

  return (
    <ul className="p-6 w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allPosts.map((post: PostType, index: number) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </ul>
  );
};

export default Posts;
