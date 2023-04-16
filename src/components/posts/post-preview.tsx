import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { css } from "@emotion/react";

type Props = {
  title: string;
  coverImage: string;
  blurDataURL: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  blurDataURL,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <li css={preview}>
      <div className="post-des">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <h3 className="hover:underline">{title}</h3>
        </Link>
        <DateFormatter dateString={date} />
        <p>{excerpt}</p>
      </div>
      <CoverImage
        slug={slug}
        title={title}
        src={coverImage}
        blurDataURL={blurDataURL}
      />
    </li>
  );
};

export default PostPreview;

const preview = css`
  border-bottom: 1px solid #00000020;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0 0 0.1rem 0;
    font-weight: 500;
  }
  p {
    margin: 0.5rem 0 0 0;
    color: #00000070;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5rem;
  }
`;
