import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import { portfolios } from "_portfolios";
import Portfolio from "interfaces/portfolio";
import { getPlaiceholder } from "plaiceholder";
import CoverImage from "components/portfolio/cover-image";
import Ing from "components/portfolio/ing";

type Props = {
  portfolio: Portfolio;
};

const PortfolioDetail = ({ portfolio }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !portfolio?.path) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        ""
      ) : (
        <article>
          <Head>
            <title>{portfolio.title} | 타이의 쿠키</title>
            <meta property="og:image" content={portfolio.thumbnail} />
          </Head>
          <Ing />
        </article>
      )}
    </>
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
  console.log(portfolio);
  if (!portfolio) {
    return {
      notFound: true,
    };
  }

  const { base64 } = await getPlaiceholder(portfolio.thumbnail);

  return {
    props: {
      portfolio: {
        ...portfolio,
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
