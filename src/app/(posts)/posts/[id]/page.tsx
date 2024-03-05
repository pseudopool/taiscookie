import { fetchPost } from "@/apis/fetchPost";
import PostBody from "@/components/post/body";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);

  return (
    <section className="p-8 w-full flex flex-col gap-4">
      <h1 className="text-2xl text-center font-bold">{post.title}</h1>
      <h2 className="text-xl text-center font-medium">{post.excerpt}</h2>
      <span className="block text-lg text-center font-thin">{post.date}</span>
      <PostBody content={post.content} />
    </section>
  );
};

export default PostPage;
