import { portfolios } from "_portfolios";
import AllPortfolio from "components/portfolio/all-portfolio";
import { Portfolio } from "interfaces/portfolio";
import { getPlaiceholder } from "plaiceholder";

type Props = {
  allPortfolio: Portfolio[];
};

const AllPortFolio = ({ allPortfolio }: Props) => {
  return (
    <section>
      <AllPortfolio portfolios={allPortfolio} />
    </section>
  );
};

export default AllPortFolio;

export const getStaticProps = async () => {
  const allPortfolio = await Promise.all(
    portfolios.map(async (portfolio) => {
      const { base64 } = await getPlaiceholder(portfolio.thumbnail);
      return { ...portfolio, blurDataURL: base64 };
    })
  );

  return {
    props: { allPortfolio },
  };
};
