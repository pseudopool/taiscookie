import type {NextPage} from 'next';
import {css} from '@emotion/react';

import Typography from 'components/Typography';
import {Theme} from 'styles/Theme';

const About: NextPage = () => {
  return (
    <article css={index}>
      <Typography>
        <span>전문성</span>
        프론트엔드 개발자. <em>매끄러운, 쉬운, 모두에게 열린 사용자 경험</em>에
        집중한다. 접근성, 반응형 웹, 웹 표준, 웹 성능, SEO, 다국어 지원을
        고려하여 개발한다.
      </Typography>
      <Typography>
        <span>강점</span>수년간 카피라이터와 에디터, 그리고 마케터로 일했다.{' '}
        <em>사용자의 행동을 탐구해 서비스에 필요한 단어와 문장을 찾아내던</em>{' '}
        습관을 간직한 채 개발한다.
      </Typography>
      <Typography>
        <span>열정</span>
        읽기와 쓰기, 테크노와 개버, 감자 요리와 피자, 리슬링과 드라이 마티니,
        단순한 영화와 건조한 그림, 모든 생명에 대한 존중과 사랑.
      </Typography>
      <Typography>
        <span>만트라</span>
        ἄσκησις, αὐτάρκεια, ἀναίδεια
      </Typography>
    </article>
  );
};

export default About;

const index = css`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1.5rem;
  padding: 2rem;
  p {
    line-height: 2rem;
  }
  span {
    font-weight: 800;
    color: ${Theme.mainFontColor};
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    border-right: 2px dotted ${Theme.mainFontColor};
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    height: 100%;
  }
`;
