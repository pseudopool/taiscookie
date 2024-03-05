import { fetchPost } from "@/apis/fetchPost";
import PostBody from "@/components/post/body";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);

  return (
    <section>
      <h1>{post.title}</h1>
      <h2>{post.excerpt}</h2>
      <span>{post.date}</span>
      <PostBody content={post.content} />
    </section>
  );
};

export default PostPage;
