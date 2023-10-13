import Head from 'next/head';

import {getPlaiceholder} from 'plaiceholder';

import fetchPosts from 'apis/fetchPosts';
import AllPosts from 'components/posts/all-posts';
import type {Post} from 'interfaces/post';
import {formatNotionPost} from 'utils/formatNotionPost';
import fetchRandomImage from '../../apis/fetchRandomImage';

type Props = {
  allPosts: Post[];
};

export default function Index({allPosts}: Props) {
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
  const allPosts = await fetchPosts().then(res =>
    res.results.map((post: any) => formatNotionPost(post))
  );

  const randomCoverImages = await fetchRandomImage(allPosts.length);

  const allPostsWithBlurData = await Promise.all(
    allPosts.map(async (post: Post, index: number) => {
      const coverImage = randomCoverImages[index].urls.regular || '';
      const {base64} = await getPlaiceholder(coverImage);

      return {
        ...post,
        coverImage,
        blurDataURL: base64,
      };
    })
  );

  return {
    props: {allPosts: allPostsWithBlurData},
  };
};
