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
      <div>
        <Image
          src={img}
          alt={title}
          width={800}
          height={400}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
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
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  img {
    object-fit: cover;
    width: 100%;
  }
  h1 {
    font-weight: 500;
    font-size: 2rem;
    margin: 1rem;
  }
`;
