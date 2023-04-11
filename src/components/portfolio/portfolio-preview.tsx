import { css } from "@emotion/react";
import CoverImage from "./cover-image";
import Portfolio from "interfaces/portfolio";
import Link from "next/link";

const PortfolioPreview = ({
  path,
  title,
  date,
  thumbnail,
  blurDataURL,
}: Portfolio) => {
  return (
    <Link as={`/portfolio/${path}`} href="/portfolio/[slug]">
      <li css={portfolioPreview}>
        <CoverImage title={title} src={thumbnail} blurDataURL={blurDataURL} />
        <h3>
          {title} <span>{date}</span>
        </h3>
      </li>
    </Link>
  );
};

export default PortfolioPreview;

const portfolioPreview = css`
  width: 100%;
  max-width: 40rem;
  max-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  background-color: white;
  border-radius: 0.5rem;
  margin: 0 1rem;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 1rem 0.5rem #f0f0f070;
    img {
      // 천천히
      transition: filter 0.2s;
      filter: none;
    }
  }
  img {
    filter: brightness(0.8);
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
