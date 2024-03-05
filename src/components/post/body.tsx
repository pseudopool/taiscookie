"use client";

import { useEffect } from "react";

import "highlight.js/styles/tokyo-night-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import markdownStyles from "@/styles/markdown.module.css";

hljs.registerLanguage("javascript", javascript);

const PostBody = ({ content }: { content: string }) => {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("code");
    codeBlocks.forEach((codeBlock) => {
      hljs.highlightElement(codeBlock);
    });
  }, []);

  return (
    <article
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
export default PostBody;
