import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import { Theme } from "../../styles/Theme";

export default function PdfLink() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <div css={link}>
          <Link href="https://drive.google.com/file/d/1B37AQmd9SYC0fPflRpKH8xy83ZLEcpa2/view?usp=sharing">
            <a>👆 PDF로 보기</a>
          </Link>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
      )}
    </>
  );
}

const link = css`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: white;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0px 10px 20px 0px #00000010;
  text-align: center;
  padding: 1rem;
  a {
    color: ${Theme.mainFontColor};
  }
  button {
    cursor: pointer;
    font-weight: 600;
    border: 0;
    background-color: transparent;
    float: right;
  }
`;
