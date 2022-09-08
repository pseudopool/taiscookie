import type { HeadFC } from "gatsby";
import Layout from "../../components/Layout";

const PostsIndex = () => {
  return (
    <Layout>
      <section>
        <div>hi</div>
      </section>
    </Layout>
  );
};

export default PostsIndex;
export const Head: HeadFC = () => <title>Tai's Cookie | Posts</title>;
