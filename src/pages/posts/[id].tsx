import {useRouter} from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import {getPlaiceholder} from 'plaiceholder';

import fetchPosts from 'apis/fetchPosts';
import fetchRandomImage from 'apis/fetchRandomImage';
import {URL} from 'consts/url';
import PostTitle from 'components/posts/post-title';
import PostBody from 'components/posts/post-body';
import markdownToHtml from 'utils/markdownToHtml';
import type {Post} from 'interfaces/post';

type Props = {
  post: Post;
  preview?: boolean;
};

export default function Post({post}: Props) {
  console.log(post);
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        ''
      ) : (
        <article>
          <Head>
            <title>{post.title} | 타이의 쿠키</title>
            <link
              rel="canonical"
              href={URL + '/posts/' + post.id}
              key="canonical"
            />
            <meta name="description" content={post.excerpt} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.excerpt} />
            <meta property="og:image" content={post.ogImage} />
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
    id: string;
  };
};

export async function getStaticProps({params: {id}}: Params) {
  const randomImageFromUnsplash = await fetchRandomImage();

  const post = await (
    await fetch(`https://api.notion.com/v1/pages/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
        'Notion-Version': '2021-05-13',
      },
      method: 'GET',
    })
  )
    .json()
    .then(res => {
      return {
        title: res.properties.title.title[0].plain_text,
        date: res.properties.date.date.start,
        id: res.id,
        url: res.url,
        ogImage: randomImageFromUnsplash[0].urls.thumb,
        coverImage: randomImageFromUnsplash[0].urls.regular,
        excerpt: res.properties.excerpt.rich_text[0].plain_text,
      };
    });

  const markdown = await (
    await fetch(`https://api.notion.com/v1/blocks/${id}/children`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
        'Notion-Version': '2021-05-13',
      },
      method: 'GET',
    })
  )
    .json()
    .then(res => res.results[0].code.text[0].plain_text);
  const content = await markdownToHtml(markdown || '');

  const blurDataURL = await getPlaiceholder(post.coverImage).then(
    res => res.base64
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
  const posts = await fetchPosts().then(res =>
    res.results.map((post: any) => {
      return {
        id: post.id,
      };
    })
  );

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          id: post.id,
        },
      };
    }),
    fallback: true,
  };
}
