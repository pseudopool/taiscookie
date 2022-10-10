import { css } from "@emotion/react";
import markdownStyles from "../../styles/markdown-styles.module.css";

type Props = {
  content: string;
};

const postbody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  div#markdown {
    object-fit: cover;
    width: 100%;
    max-width: 800px;
  }
`;

const PostBody = ({ content }: Props) => {
  return (
    <div css={postbody}>
      <div
        id="markdown"
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
