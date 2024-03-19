import Loading from "@/components/loading";
import PostDetail from "@/components/post/detail";
import { Suspense } from "react";

const PostPage = async ({ params }: { params: { id: string } }) => (
  <section className="py-8 w-full flex flex-col gap-4 max-w-screen-2xl">
    <Suspense fallback={<Loading />}>
      <PostDetail id={params.id} />
    </Suspense>
  </section>
);

export default PostPage;
