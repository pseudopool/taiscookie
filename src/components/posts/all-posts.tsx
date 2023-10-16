import PostPreview from './post-preview';
import type {Post} from 'interfaces/post';
import {css} from '@emotion/react';
import {Theme} from 'styles/Theme';

type Props = {
  posts: Post[];
};

const AllPosts = ({posts}: Props) => {
  return (
    <section css={allposts}>
      <ul>
        {posts.map(post => (
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.coverImage}
            blurDataURL={post.blurDataURL}
            date={post.date}
            id={post.id}
            excerpt={post.excerpt}
          />
        ))}
      </ul>
    </section>
  );
};

export default AllPosts;

const allposts = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  ul {
    width: 100%;
    padding: 0 1rem;
    margin: 0;
  }
  span {
    font-weight: 500;
    font-family: pretendard sans-serif;
    color: ${Theme.mainFontColor};
  }
  @media screen and (min-width: 700px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      padding: 0;
      align-items: flex-start;
    }
  }
`;
