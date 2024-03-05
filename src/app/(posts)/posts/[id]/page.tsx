import { fetchPost } from "@/apis/fetchPost";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);

  return (
    <section>
      <h1>{post.title}</h1>
    </section>
  );
};

export default PostPage;
