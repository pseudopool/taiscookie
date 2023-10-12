import {css} from '@emotion/react';

import WorkDetail from 'components/works/work-detail';
import {WORKS} from 'consts/works';

const Works = () => {
  return (
    <section css={works}>
      <h2>works</h2>
      <ul>
        {WORKS.map(work => (
          <WorkDetail key={work.name} work={work} />
        ))}
      </ul>
    </section>
  );
};
export default Works;

const works = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: Courier;
    text-align: center;
    font-weight: 300;
    font-size: 1.2rem;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;
