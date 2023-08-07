import { css } from "@emotion/react";
import { useEffect } from "react";

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import markdownStyles from "styles/markdown-styles.module.css";

hljs.registerLanguage("javascript", javascript);

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
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("code");
    codeBlocks.forEach((codeBlock) => {
      hljs.highlightElement(codeBlock);
    });
  }, []);

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
