import PostPreview from "./post-preview";
import type Post from "../../interfaces/post";
import { css } from "@emotion/react";
import { Theme } from "../../styles/Theme";

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  return (
    <section css={allposts}>
      <h2>
        <span>{posts.length}</span> posts
      </h2>
      <ul
        css={css`
          padding: 0;
        `}
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            blurDataURL={post.blurDataURL}
            date={post.date}
            slug={post.slug}
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
  h2 {
    font-family: Courier;
    text-align: center;
    font-weight: 300;
    font-size: 1.2rem;
  }
  ul {
    max-width: 760px;
    width: 100%;
    padding: 0 1rem;
  }
  span {
    font-weight: 500;
    color: ${Theme.mainFontColor};
  }
`;
