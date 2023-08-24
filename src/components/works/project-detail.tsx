import { css } from "@emotion/react";

import { Project } from "interfaces/work";
import { Theme } from "styles/Theme";

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => (
  <li key={project.name} css={projectDetail}>
    <h4>{project.name}</h4>
    <time>{project.period}</time>
    <desc>{project.description}</desc>
  </li>
);

export default Project;

const projectDetail = css`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #00000010;
  padding: 0.5rem;
  margin-top: 0.5rem;
  h4 {
    color: ${Theme.mainFontColor};
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0;
  }
  time {
    display: block;
    font-size: 0.7rem;
    font-weight: 300;
    color: #666;
    margin-bottom: 0.5rem;
  }
`;
