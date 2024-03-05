import { Suspense } from "react";
import Loading from "@/components/loading";
import Posts from "@/components/post/posts";

const PostsPage = async () => (
  <section>
    <Suspense fallback={<Loading />}>
      <Posts />
    </Suspense>
  </section>
);

export default PostsPage;
