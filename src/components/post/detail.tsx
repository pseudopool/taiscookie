import { fetchPost } from "@/apis/fetchPost";
import PostBody from "./body";

type Props = {
  id: string;
};

const PostDetail = async ({ id }: Props) => {
  const post = await fetchPost(id);

  return (
    <>
      <div className="break-keep mb-6 flex flex-col">
        <h1 className="p-2 border-b-2 border-black text-xl font-medium">
          {post.title}
        </h1>
        <h2 className="p-2 border-b-2 border-black font-light text-gray-500">
          {post.excerpt}
        </h2>
        <span className="p-2 block text-sm font-azeret bg-highlight">
          {post.date}
        </span>
      </div>
      <PostBody content={post.content} />
    </>
  );
};

export default PostDetail;
