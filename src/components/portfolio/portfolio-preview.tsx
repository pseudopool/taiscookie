import { css } from "@emotion/react";
import CoverImage from "./cover-image";
import { Portfolio } from "interfaces/portfolio";
import Link from "next/link";

const PortfolioPreview = ({
  path,
  title,
  date,
  thumbnail,
  blurDataURL,
}: Portfolio) => {
  return (
    <Link as={`/portfolio/${path}`} href="/portfolio/[slug]" css={preview}>
      <li>
        <CoverImage title={title} src={thumbnail} blurDataURL={blurDataURL} />
        <h3>
          {title} <span>{date}</span>
        </h3>
      </li>
    </Link>
  );
};

export default PortfolioPreview;

const preview = css`
  width: 100vw;
  max-width: 40rem;
  margin: 0 1rem;
  list-style: none;
  cursor: pointer;
  li {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }
  img {
    width: inherit;
    height: inherit;
    filter: brightness(0.6);
  }
  :hover {
    box-shadow: 0 0 1rem 0.5rem #f0f0f070;
    img {
      transition: filter 0.2s;
      filter: none;
    }
  }
  h3 {
    color: #8f8e8e;
    text-align: center;
    span {
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
`;
