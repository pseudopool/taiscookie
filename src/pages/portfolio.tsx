import { css } from "@emotion/react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { projects } from "../../public/assets/projects/projects";
import Link from "next/link";

export default function Portfolio() {
  const portfolio = css`
    width: min(100%, 1000px);
    margin-inline: auto;
    padding-inline: 3rem;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 1.5rem;
    margin-top: 1.5rem;
    .thumbnail {
      background-color: #b4b4b4;
      border-radius: 15px;
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
    @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
      article {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  `;
  return (
    <section css={portfolio}>
      {projects.map((project) => {
        return (
          <article key={project.id}>
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
            <aside>
              {project.skills.map((skill) => {
                return <li key={skill}>{skill}</li>;
              })}
              <Link href={project.github}>
                <Icon icon="akar-icons:github-fill" className="icon" />
              </Link>
            </aside>
          </article>
        );
      })}
    </section>
  );
}
