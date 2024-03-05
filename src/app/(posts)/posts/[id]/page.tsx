import { fetchPost } from "@/apis/fetchPost";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);

  return <div>안뇽</div>;
};

export default PostPage;
