import AllPosts from "components/posts/all-posts";
import Head from "next/head";
import { Post } from "interfaces/post";
import { getPlaiceholder } from "plaiceholder";
import fetchPosts from "apis/fetchPosts";

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
  const notionPosts = await fetchPosts().then((res) =>
    res.results.map((post: any) => {
      return {
        title: post.properties.title.title[0].plain_text,
        date: post.properties.date.date.start,
        id: post.id,
        url: post.url,
        coverImage: post.properties.coverImage.files[0].file.url,
        excerpt: post.properties.excerpt.rich_text[0].plain_text,
      };
    })
  );

  const allPosts = await Promise.all(
    notionPosts.map(async (post: Post) => {
      const { base64 } = await getPlaiceholder(post.coverImage);
      return { ...post, blurDataURL: base64 };
    })
  );

  return {
    props: { allPosts },
  };
};
