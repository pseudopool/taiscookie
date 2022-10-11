/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  img: string;
};

const posttitle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
    max-width: 800px;
    height: 200px;
  }
  h1 {
    font-weight: 500;
    font-size: 2rem;
    margin: 1rem;
  }
`;

const PostTitle = ({ title, date, img }: Props) => {
  return (
    <div css={posttitle}>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <DateFormatter dateString={date} />
    </div>
  );
};

export default PostTitle;
