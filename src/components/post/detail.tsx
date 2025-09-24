import { PostQueryResult } from "@/libs/sanity/sanity.types";
import { type PortableTextBlock } from "next-sanity";
import PortableText from "../sanity/PortableText";
import dayjs from "dayjs";

type Props = {
  post: PostQueryResult;
};

const PostDetail = async ({ post }: Props) => {
  return (
    <>
      <div className="break-keep flex flex-col">
        <h1 className="p-2 border-b-2 border-black text-xl font-medium">
          {post?.title}
        </h1>
        <h2 className="p-2 border-b-2 border-black font-light text-gray-500">
          {post?.excerpt}
        </h2>
        <span className="p-2 block text-sm font-azeret bg-highlight">
          {dayjs(post?.date).format("YYYY-MM-DD")}
        </span>
      </div>
      {post?.content?.length && (
        <PortableText value={post.content as PortableTextBlock[]} />
      )}
      {/* <PostBody content={post?.content} /> */}
    </>
  );
};

export default PostDetail;
