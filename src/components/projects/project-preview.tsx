import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import ProjectType from "../../interfaces/project";
import { Theme } from "../../styles/Theme";
import Skills from "./project-skills";

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  return (
    <>
      <article key={project.id} css={projectItem}>
        <Link href={project.github}>
          <Image
            alt={project.title}
            src={project.imgUrl}
            width="300px"
            height="300px"
            className="thumbnail"
            placeholder="blur"
            blurDataURL={project.blurDataURL}
          />
        </Link>
        <h1>{project.title}</h1>
        <span>{project.date}</span>
        <h2>{project.description}</h2>
        <aside>
          <Skills skills={project.skills} />
          <Link href={project.blog}>
            <a>✍️ 이런 어려움을 겪고, 해결했습니다.</a>
          </Link>
          <Link href={project.github}>
            <a>🔗 README.md 바로가기</a>
          </Link>
        </aside>
      </article>
    </>
  );
}

const projectItem = css`
  display: flex;
  flex-direction: column;
  .thumbnail {
    cursor: pointer;
    background-color: #b4b4b4;
    border-radius: 15px;
    object-fit: cover;
  }
  span {
    color: #b4b4b4;
    font-size: 0.8rem;
    text-align: center;
  }
  h1 {
    font-weight: 700;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #00000020;
  }
  h2 {
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.3rem;
  }
  aside {
    display: flex;
    flex-direction: column;
    a {
      color: ${Theme.mainFontColor};
      margin-bottom: 0.5rem;
    }
  }
`;
