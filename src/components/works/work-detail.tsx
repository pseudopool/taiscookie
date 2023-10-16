import {css} from '@emotion/react';

import Tags from 'components/Tags';
import type {Work} from 'interfaces/work';
import {Theme} from 'styles/Theme';

import Project from './project-detail';

type Props = {
  work: Work;
};

const WorkDetail = ({work}: Props) => (
  <li key={work.name} css={workDetail}>
    <h3>{work.name}</h3>
    <span>{work.role}</span>
    <p>{work.description}</p>
    <Tags tags={work.tech} />
    <ul>
      {work.projects.map(project => (
        <Project project={project} key={project.name} />
      ))}
    </ul>
  </li>
);

export default WorkDetail;

const workDetail = css`
  max-width: 800px;
  background-color: white;
  margin: 0 2rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px dotted ${Theme.mainFontColor};
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${Theme.mainFontColor};
    border-bottom: 1px solid #00000050;
    padding-bottom: 0.5rem;
    margin: 0 0 0.5rem 0;
  }
  span {
    display: block;
    font-weight: 300;
    margin-bottom: 0.5rem;
    color: #666;
  }
  p {
    line-height: 1.5rem;
    font-weight: 400;
  }
`;
