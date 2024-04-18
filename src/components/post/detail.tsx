import { fetchPost } from "@/apis/fetchPost";
import PostBody from "./body";

type Props = {
  id: string;
};

const PostDetail = async ({ id }: Props) => {
  const post = await fetchPost(id);

  return (
    <>
      <h1 className="text-2xl text-center font-bold break-words">
        {post.title}
      </h1>
      <h2 className="text-xl text-center font-medium break-words">
        {post.excerpt}
      </h2>
      <span className="block text-lg text-center font-thin">{post.date}</span>
      <PostBody content={post.content} />
    </>
  );
};

export default PostDetail;
