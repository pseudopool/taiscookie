import Head from "next/head";

import { getPlaiceholder } from "plaiceholder";

import fetchPosts from "apis/fetchPosts";
import AllPosts from "components/posts/all-posts";
import type { Post } from "interfaces/post";
import { formatNotionPost } from "utils/formatNotionPost";

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
  // get posts from notion database
  const allPosts = await fetchPosts().then((res) =>
    res.results.map((post: any) => formatNotionPost(post))
  );

  const allPostsWithBlurData = await Promise.all(
    allPosts.map(async (post: Post) => {
      const { base64 } = await getPlaiceholder(post.coverImage);
      return { ...post, blurDataURL: base64 };
    })
  );

  return {
    props: { allPosts: allPostsWithBlurData },
    revalidate: 10,
  };
};
