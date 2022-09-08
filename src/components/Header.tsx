import { Link } from "gatsby";
import { css } from "@emotion/react";

export default function Header() {
  const header = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      margin-left: 1rem;
      font-size: 1rem;
    }
    div {
      display: flex;
      a {
        margin-right: 1rem;
        text-decoration: none;
        color: inherit;
        font-size: 0.9rem;
        :hover {
          font-weight: 500;
        }
      }
    }
  `;

  return (
    <nav css={header}>
      <h1>🍪 Tai's Cookie</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
      </div>
    </nav>
  );
}
