import { css } from "@emotion/react";
import Head from "next/head";
import { projects } from "../../public/assets/projects/projects";
import Project from "../components/projects/project-preview";

export default function Portfolio() {
  const portfolio = css`
    padding-inline: 3rem;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    place-content: center;
    grid-gap: 1.5rem;
    margin-top: 1.5rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }
  `;

  return (
    <>
      <Head>
        <title>포트폴리오 | 타이의 쿠키</title>
      </Head>
      <section css={portfolio}>
        {projects
          // 최근 작성순 정렬
          .sort((pr1, pr2) => (pr1.id > pr2.id ? -1 : 1))
          .map((project) => {
            return <Project key={project.id} project={project} />;
          })}
      </section>
    </>
  );
}
