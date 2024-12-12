import Loading from "@/components/loading";
import PostDetail from "@/components/post/detail";
import { Suspense } from "react";

const PostPage = async ({ params }: { params: { id: string } }) => (
  <section className="pb-8 flex flex-col max-w-screen-2xl w-full mx-auto">
    <Suspense fallback={<Loading />}>
      <PostDetail id={params.id} />
    </Suspense>
  </section>
);

export default PostPage;
