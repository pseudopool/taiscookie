import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>타이의 블로그</title>
      </Head>
      <AllPosts posts={allPosts} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
