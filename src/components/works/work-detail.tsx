import { css } from "@emotion/react";

import Tags from "components/Tags";
import type { Work } from "interfaces/work";
import { Theme } from "styles/Theme";

type Props = {
  work: Work;
};

const WorkDetail = ({ work }: Props) => (
  <li key={work.name} css={workDetail}>
    <h3>{work.name}</h3>
    <span>{work.role}</span>
    <desc>{work.description}</desc>
    <Tags tags={work.tech} />
    <ul>
      {work.projects.map((project) => (
        <li key={project.name} css={projectDetail}>
          <h4>{project.name}</h4>
          <time>{project.period}</time>
          <desc>{project.description}</desc>
        </li>
      ))}
    </ul>
  </li>
);

export default WorkDetail;

const workDetail = css`
  max-width: 800px;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px dotted ${Theme.mainFontColor};
  h3 {
    font-weight: 500;
    color: ${Theme.mainFontColor};
  }
  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    color: #666;
  }
  desc {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

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
