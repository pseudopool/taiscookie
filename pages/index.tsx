import type { NextPage } from "next";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  const index = css`
    width: min(100%, 1000px);
    margin-inline: auto;
    padding-inline: 3rem;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 1.5rem;
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
      strong {
        color: #1a254b;
        font-weight: 600;
      }
    }
    @media screen and (max-width: 786px) {
      display: flex;
      flex-direction: column;
      grid-gap: 0;
    }
  `;
  return (
    <article css={index}>
      <p>
        <span>하나</span>
        1994년 10월 24일 출생. 동국대학교에서 광고홍보학과 신문방송학을
        공부했다. 졸업 후 <strong>기자, 에디터, 카피라이터</strong>로 일하다가
        2022년 <strong>프론트엔드 개발자</strong>가 된다.
      </p>
      <p>
        <span>둘</span>
        최근 관심사는{" "}
        <strong>테크노 음악, 현대 시학, 자바스크립트 생태계</strong>
        다.
      </p>
      <p>
        <span>셋</span>
        도움이 필요한 고양이를 주울 기회를 은근하게 기다리고 있다.
      </p>
    </article>
  );
};

export default Home;
