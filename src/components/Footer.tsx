import {css} from '@emotion/react';
import {Icon} from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer css={footer}>
      <Link
        href="https://github.com/pseudopool"
        aria-label="Go to Github profile"
      >
        <Icon icon="akar-icons:github-fill" className="icon" />
      </Link>
      <p>@타이의 쿠키 by Tai Song</p>
    </footer>
  );
}

const footer = css`
  text-align: center;
  width: 100%;
  bottom: 0px;
  padding: 1rem;
  font-size: 0.9rem;
  color: #b4b4b4;
  .icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
