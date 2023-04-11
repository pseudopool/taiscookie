import Head from "next/head";
import { portfolios } from "_portfolios";
import type { Content } from "interfaces/portfolio";
import { getPlaiceholder } from "plaiceholder";
import Ing from "components/portfolio/ing";

type Props = {
  portfolio: Content;
};

const PortfolioDetail = ({ portfolio }: Props) => {
  return (
    <article>
      <Head>
        <title>{portfolio.name} | 타이의 쿠키</title>
        <meta property="og:image" content={portfolio.imageUrl} />
      </Head>
      <Ing />
    </article>
  );
};

export default PortfolioDetail;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const portfolio = portfolios.find(
    (portfolio) => portfolio.path === params.slug
  );
  if (!portfolio) {
    return {
      notFound: true,
    };
  }

  const { base64 } = await getPlaiceholder(portfolio.thumbnail);

  return {
    props: {
      portfolio: {
        ...portfolio.content,
        blurDataURL: base64,
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: portfolios.map((portfolio) => {
      return {
        params: {
          slug: portfolio.path,
        },
      };
    }),
    fallback: false,
  };
}
