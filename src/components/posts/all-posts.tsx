import PostPreview from './post-preview';
import type {Post} from 'interfaces/post';
import {css} from '@emotion/react';
import {Theme} from 'styles/Theme';
import Typography from '../Typography';

type Props = {
  posts: Post[];
};

const AllPosts = ({posts}: Props) => {
  return (
    <section css={allposts}>
      <Typography variant="h2">
        <span>{posts.length}</span> posts
      </Typography>
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
  margin: 1rem;
  h2 {
    margin: 0 0 2rem 0;
    font-family: Courier;
    text-align: center;
  }
  ul {
    width: 100%;
    padding: 0 1rem;
    margin: 0;
  }
  span {
    font-weight: 500;
    color: ${Theme.mainFontColor};
  }
`;
