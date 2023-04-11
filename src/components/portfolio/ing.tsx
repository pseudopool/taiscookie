import { css } from "@emotion/react";

const Ing = () => {
  return <div css={ing}>in progress ⚒️</div>;
};

export default Ing;

const ing = css`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
  height: 100vh;
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
  font-weight: 600;
  color: navy;
`;
