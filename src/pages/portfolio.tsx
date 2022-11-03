import { css } from "@emotion/react";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import { projects } from "../../public/assets/projects/projects";
import PdfLink from "../components/projects/portfolio-link";
import Project from "../components/projects/project-preview";
import ProjectType from "../interfaces/project";

type Props = {
  allProjects: ProjectType[];
};

export default function Portfolio({ allProjects }: Props) {
  return (
    <>
      <Head>
        <title>포트폴리오 | 타이의 쿠키</title>
      </Head>
      <PdfLink />
      <section css={portfolio}>
        <div>
          {allProjects
            // 최근 작성순 정렬
            .sort((pr1, pr2) => (pr1.id > pr2.id ? -1 : 1))
            .map((project) => {
              return <Project key={project.id} project={project} />;
            })}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const allProjects = await Promise.all(
    projects.map(async (project) => {
      const { base64 } = await getPlaiceholder(project.imgUrl);
      return { ...project, blurDataURL: base64 };
    })
  );
  return {
    props: { allProjects },
  };
};

const portfolio = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding-inline: 3rem;
    margin-top: 1.5rem;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    place-content: center;
    grid-gap: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    div {
      grid-template-columns: 100%;
    }
  }
`;
