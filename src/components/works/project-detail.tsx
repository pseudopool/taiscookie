import { css } from "@emotion/react";

import { Project } from "interfaces/work";
import { Theme } from "styles/Theme";

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => (
  <li key={project.name} css={projectDetail}>
    <h4>{project.name}</h4>
    <p>{project.description}</p>
    <time>{project.period}</time>
    <ul>
      {project.features.map((feature) => (
        <li key={feature}>
          <span>* </span>
          {feature}
        </li>
      ))}
    </ul>
  </li>
);

export default Project;

const projectDetail = css`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  h4 {
    font-size: 1.2rem;
    color: ${Theme.mainFontColor};
    font-weight: 500;
    margin: 0;
  }
  p {
    margin: 0;
  }
  time {
    display: block;
    font-size: 0.9rem;
    font-weight: 300;
    color: #666;
  }
  ul {
    background-color: #00000010;
    border-radius: 0.5rem;
    margin-top: 1rem;
    li {
      margin: 1rem 0;
      padding: 0 1rem;
      font-size: 0.9rem;
      span {
        display: inline;
        color: ${Theme.mainFontColor};
        font-weight: 600;
      }
    }
  }
`;
