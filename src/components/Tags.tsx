import { css } from "@emotion/react";

import { Theme } from "styles/Theme";

import Tag from "./Tag";

const Tags = ({ tags }: { tags: string[] }) => (
  <ul css={tagList}>
    {tags.map((tag) => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default Tags;

const tagList = css`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.8rem 0.3rem;
  margin: 1rem 0;
  li {
    span {
      display: inline;
      padding: 0.4rem 0.7rem;
      border-radius: 1rem;
      background-color: ${Theme.mainFontColor};
      font-family: "Courier";
      font-size: 0.8rem;
      font-weight: 500;
      color: white;
    }
  }
`;
