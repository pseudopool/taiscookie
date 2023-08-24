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
  gap: 0.5rem 0.2rem;
  margin: 1rem 0;
  li {
    span {
      display: inline;
      padding: 0.3rem 0.5rem;
      border-radius: 1rem;
      background-color: ${Theme.mainFontColor};
      font-size: 0.7rem;
      color: white;
    }
  }
`;
