import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import {css} from '@emotion/react';
import {Theme} from '../../styles/Theme';

type Props = {
  title: string;
  coverImage: string;
  blurDataURL: string;
  date: string;
  excerpt: string;
  id: string;
};

const PostPreview = ({
  title,
  coverImage,
  blurDataURL,
  date,
  excerpt,
  id,
}: Props) => {
  return (
    <li css={preview}>
      <Link as={`/posts/${id}`} href="/posts/[id]">
        <CoverImage title={title} src={coverImage} blurDataURL={blurDataURL} />
        <div>
          <h3>{title}</h3>
          <p>{excerpt}</p> <DateFormatter dateString={date} />
        </div>
      </Link>
    </li>
  );
};

export default PostPreview;

const preview = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;
  cursor: pointer;
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: larger;
    font-weight: 500;
    line-height: 1.5;
  }
  p {
    font-size: medium;
    color: ${Theme.textGray};
    line-height: 1.5;
    margin: 0 0 1rem 0;
  }
  &:hover {
    img {
      transition: all 0.2s ease-in-out;
      box-shadow: 0 10px 20px #00000010;
      transform: translateY(-5px);
    }
    h3 {
      transition: all 0.3s ease-in-out;
      color: ${Theme.mainFontColor};
      font-weight: 600;
    }
  }
`;
