import { css } from "@emotion/react";
import Link from "next/link";

export default function Navbar() {
  const navbar = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px dotted #b4b4b4;
    h1 {
      font-weight: 600;
      color: #1a254b;
      cursor: pointer;
      :hover {
        color: #b4b4b4;
      }
    }
    ul {
      padding: 0;
      display: flex;
      li {
        list-style: none;
        margin-right: 1.5rem;
        cursor: pointer;
        :hover {
          font-weight: 500;
        }
      }
    }
  `;
  return (
    <nav css={navbar}>
      <Link href="/">
        <h1>🍪 타이의 쿠키</h1>
      </Link>
      <ul>
        <Link href="/">
          <li>홈</li>
        </Link>
        <Link href="/portfolio">
          <li>포트폴리오</li>
        </Link>
        <Link href="/posts">
          <li>포스트</li>
        </Link>
      </ul>
    </nav>
  );
}
