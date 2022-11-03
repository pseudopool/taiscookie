import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import { getPlaiceholder } from "plaiceholder";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>포스트 | 타이의 쿠키</title>
      </Head>
      <AllPosts posts={allPosts} />
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);
  const allPosts = await Promise.all(
    posts.map(async (post) => {
      const { base64 } = await getPlaiceholder(post.coverImage);
      return { ...post, blurDataURL: base64 };
    })
  );

  return {
    props: { allPosts },
  };
};
