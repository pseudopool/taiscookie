import {css} from '@emotion/react';
import {Theme} from '../styles/Theme';

type Props = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3';
};

const Typography = ({children, variant}: Props) => {
  switch (variant) {
    case 'h1':
      return <h1 css={h1}>{children}</h1>;
    case 'h2':
      return <h2 css={h2}>{children}</h2>;
    case 'h3':
      return <h3 css={normal}>{children}</h3>;
    default:
      return <p css={normal}>{children}</p>;
  }
};

export default Typography;

const h1 = css`
  font-weight: 400;
  font-size: 1.5rem;
  @media screen and (min-width: 700px) {
    font-size: 2rem;
  }
`;

const h2 = css`
  font-weight: 300;
  font-size: 1.2rem;
  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

const normal = css`
  line-height: 1.5rem;
  em {
    color: ${Theme.mainFontColor};
    font-style: normal;
    font-weight: 600;
  }
  @media screen and (min-width: 700px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;
