import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { css } from "@emotion/react";
import ProjectType from "../../interfaces/project";
import { Theme } from "../../styles/Theme";

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  const projectItem = css`
    display: flex;
    flex-direction: column;
    .thumbnail {
      background-color: #b4b4b4;
      border-radius: 15px;
      object-fit: cover;
    }
    span {
      color: #b4b4b4;
      font-size: 0.8rem;
    }
    h1 {
      font-weight: 700;
      text-align: center;
      font-family: "Courier New", Courier, monospace;
      border-bottom: 1px solid #b4b4b4;
      padding-bottom: 1rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.3rem;
    }
    a {
      color: ${Theme.mainFontColor};
    }
    aside {
      margin-top: 1rem;
    }
    li {
      list-style: none;
    }
    .icon {
      cursor: pointer;
      margin-top: 1rem;
      :hover {
        opacity: 20%;
      }
    }
  `;
  return (
    <>
      <article key={project.id} css={projectItem}>
        <Image
          alt={project.title}
          src={project.imgUrl}
          width="300px"
          height="300px"
          className="thumbnail"
        />
        <h1>{project.title}</h1>
        <span>{project.date}</span>
        <h2>{project.description}</h2>
        <Link href={project.blog}>
          <a>이런 어려움을 겪고, 해결했습니다</a>
        </Link>
        <aside>
          {project?.skills?.map((skill: string) => {
            return <li key={skill}>{skill}</li>;
          })}
          <Link href={project.github}>
            <Icon icon="akar-icons:github-fill" className="icon" />
          </Link>
        </aside>
      </article>
    </>
  );
}
