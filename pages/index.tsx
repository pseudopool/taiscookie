import type { NextPage } from "next";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  const index = css`
    width: min(100%, 1000px);
    margin-inline: auto;
    padding-inline: 3rem;
    p {
      font-size: 1.5rem;
      line-height: 2rem;
      strong {
        color: #1a254b;
        font-weight: 600;
      }
    }
  `;
  return (
    <article css={index}>
      <p>
        송송이는 1994년에 태어난 대한민국의 <strong>프론트엔드 개발자</strong>
        다. 동국대학교에서 광고홍보학과 신문방송학을 공부했다.
        <strong> 기자, 에디터, 카피라이터</strong>를 거쳐 개발자의 길에
        들어섰다.
      </p>
      <p>
        최근 관심사는 <strong>테크노 음악, 현대 시, 자바스크립트 생태계</strong>
        다.
      </p>
    </article>
  );
};

export default Home;
