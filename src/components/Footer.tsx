import { css } from "@emotion/react";

export default function Footer() {
  const footer = css`
    text-align: center;
    width: 100%;
    bottom: 0px;
    padding: 1rem;
    font-size: 0.9rem;
    color: #b4b4b4;
  `;
  return <footer css={footer}>@TAIS COOKIE by Tai Song </footer>;
}
