import { css } from "@emotion/react";
import { Theme } from "../../styles/Theme";

export default function Skill({ skills }: { skills: string[] }) {
  const wrapper = css`
    padding-left: 0;
    margin: 0.5rem 0 0 0;
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 0.5rem;
    li {
      list-style: none;
      margin: 0 0.3rem 0.3rem 0;
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 500;
      background-color: #00000020;
      padding: 0.1rem 0.3rem;
      border-radius: 0.3rem;
    }
  `;
  return (
    <ul css={wrapper}>
      {skills.map((skill: string) => {
        return <li key={skill}>{skill}</li>;
      })}
    </ul>
  );
}
