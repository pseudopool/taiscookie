import AllPosts from "components/posts/all-posts";
import Head from "next/head";
import { Post } from "interfaces/post";
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

export const getServerSideProps = async () => {
  // get posts from notion database
  const notionPosts = await (
    await fetch(
      `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          sorts: [
            {
              property: "date",
              direction: "descending",
            },
          ],
        }),
      }
    )
  )
    .json()
    .then((res) =>
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
