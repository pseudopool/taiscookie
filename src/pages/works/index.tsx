import {css} from '@emotion/react';

import WorkDetail from 'components/works/work-detail';
import {WORKS} from 'consts/works';
import Typography from 'components/Typography';

const Works = () => {
  return (
    <section css={works}>
      <Typography variant="h2">works</Typography>
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
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;
