import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";

export default function Layout({ children }: React.PropsWithChildren) {
  const global = css`
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
    * {
      font-family: "Spoqa Han Sans Neo", "sans-serif";
    }
  `;

  const layout = css`
    footer {
      background-color: #e6e9ee;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1rem;
      p {
        font-size: 0.8rem;
        font-weight: 500;
        color: #0000a0;
        margin: 0;
      }
    }
  `;

  return (
    <>
      <Global styles={global} />
      <div css={layout}>
        <Header />
        <div className="content">{children}</div>
        <footer>
          <p>Copyright 2022 Tai's Cookie</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
