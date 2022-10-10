import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import Head from "next/head";
import markdownToHtml from "../../utils/markdownToHtml";
import type PostType from "../../interfaces/post";
import PostBody from "../../components/posts/post-body";
import PostTitle from "../../components/posts/post-title";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        "Loading…"
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | 타이의 블로그</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostTitle
              title={post.title}
              date={post.date}
              img={post.ogImage.url}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
