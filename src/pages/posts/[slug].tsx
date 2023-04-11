import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "utils/api";
import markdownToHtml from "utils/markdownToHtml";
import Head from "next/head";
import ErrorPage from "next/error";
import PostTitle from "components/posts/post-title";
import PostBody from "components/posts/post-body";
import type PostType from "interfaces/post";
import { getPlaiceholder } from "plaiceholder";

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function Post({ post }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        ""
      ) : (
        <article>
          <Head>
            <title>{post.title} | 타이의 쿠키</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <PostTitle
            title={post.title}
            date={post.date}
            img={post.coverImage}
            blurDataURL={post.blurDataURL}
          />
          <PostBody content={post.content} />
        </article>
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
  const blurDataURL = await getPlaiceholder(post.coverImage).then(
    (res) => res.base64
  );

  return {
    props: {
      post: {
        ...post,
        blurDataURL,
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
