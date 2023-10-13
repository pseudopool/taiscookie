import {css} from '@emotion/react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Theme} from 'styles/Theme';
import Typography from './Typography';

const menus = [
  {
    name: '홈',
    path: '/',
    mobileDisplay: 'none',
  },
  {
    name: '포스트',
    path: '/posts',
  },
  {
    name: '일',
    path: '/works',
  },
];

export default function Navbar() {
  const {pathname} = useRouter();
  const activeMenu = menus.find(menu => menu.path === pathname);

  return (
    <nav css={navbar}>
      <Link href="/">
        <Typography variant="h1">🍪 타이의 쿠키</Typography>
      </Link>
      <menu>
        {menus.map(menu => (
          <li
            css={menuItem(activeMenu === menu)}
            key={menu.name}
            className={menu.mobileDisplay}
          >
            <Link key={menu.name} href={menu.path}>
              <Typography>{menu.name}</Typography>
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}

const navbar = css`
  position: fixed;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff50;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px #00000010;
  h1 {
    font-weight: 600;
    color: #1a254b;
    cursor: pointer;
  }
  menu {
    padding: 0;
    display: flex;
  }
  @media screen and (max-width: 700px) {
    .none {
      display: none;
    }
  }
`;

const menuItem = (isActive: boolean) => css`
  list-style: none;
  margin-right: 1.5rem;
  color: ${Theme.mainFontColor};
  font-weight: ${isActive ? 600 : 400};
  cursor: pointer;
  :hover {
    color: transparent;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;
