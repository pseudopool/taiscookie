import { css } from "@emotion/react";

export default function Footer() {
  const footer = css`
    width: 100%;
    bottom: 0px;
    position: absolute;
    padding: 1rem;
    font-size: 0.9rem;
    color: #b4b4b4;
  `;
  return <footer css={footer}>@TAI'S COOKIE by Tai Song </footer>;
}
