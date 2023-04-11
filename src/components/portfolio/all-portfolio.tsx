import Portfolio from "interfaces/portfolio";
import PortfolioPreview from "./portfolio-preview";
import { css } from "@emotion/react";

type Props = {
  portfolios: Portfolio[];
};

const AllPortfolio = ({ portfolios }: Props) => {
  return (
    <section css={allPortfolio}>
      <ul>
        {portfolios.map((portfolio) => (
          <PortfolioPreview key={portfolio.title} {...portfolio} />
        ))}
      </ul>
    </section>
  );
};

export default AllPortfolio;

const allPortfolio = css`
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;
