import type {NextPage} from 'next';
import {css} from '@emotion/react';
import {Theme} from 'styles/Theme';

const Home: NextPage = () => {
  return (
    <article css={index}>
      <p>
        <span>하나</span>
        1994년 10월 24일 출생. 동국대학교에서 광고홍보학과 신문방송학을
        공부했다. 지난 몇 년 동안 <em>카피라이터와 에디터, 그리고 마케터</em>로
        일했다.
      </p>
      <p>
        <span>둘</span>
        기획과 프로그래밍 사이를 단단하게 엮는 프론트엔드 개발자를 목표로,
        2022년부터 꾸준히 프로그래밍을 공부하고 있다.
      </p>
      <p>
        <span>셋</span>
        <em>사용자의 행동을 탐구</em>해 서비스에 필요한 단어와 문장을 찾아내던
        습관을 간직한 채 개발 분야를 파고들고 있다.
      </p>
      <p>
        <span>넷</span>
        도움이 필요한 고양이를 주울 기회를 은근하게 기다리고 있다.
      </p>
    </article>
  );
};

export default Home;

const index = css`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 1.5rem;
  height: 50vh;
  place-content: center;

  span {
    font-weight: 500;
    background-color: white;
    border: 1.5px dashed #1a254b;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    margin: 0 0.5rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    em {
      color: ${Theme.mainFontColor};
      font-style: normal;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    grid-gap: 0;
    height: 100%;
  }
`;
