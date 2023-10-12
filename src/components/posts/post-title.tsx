import {css} from '@emotion/react';
import DateFormatter from './date-formatter';
import Image from 'next/image';

type Props = {
  title: string;
  date: string;
  img: string;
  blurDataURL: string;
};

const PostTitle = ({title, date, img, blurDataURL}: Props) => {
  return (
    <div css={posttitle}>
      <Image
        src={img}
        alt={title}
        width={800}
        height={400}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      <h1>{title}</h1>
      <DateFormatter dateString={date} />
    </div>
  );
};

export default PostTitle;

const posttitle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 50rem;
    border-radius: 1rem;
    margin: 1rem;
  }
  h1 {
    font-weight: 500;
    font-size: 2rem;
    margin: 1rem;
  }
`;
