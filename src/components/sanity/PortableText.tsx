"use client";

/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import ResolvedLink from "./ResolvedLink";
import { useEffect } from "react";
import "highlight.js/styles/tokyo-night-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("pre");
    codeBlocks.forEach((codeBlock) => {
      hljs.highlightElement(codeBlock);
    });
  }, []);

  const components: PortableTextComponents = {
    listItem: {
      bullet: ({ children }) => <li className="ml-6 list-disc">{children}</li>,
      number: ({ children }) => (
        <li className="ml-6 list-decimal">{children}</li>
      ),
    },
    types: {
      code: ({ value }) => (
        <pre
          data-language={value.language}
          className={
            "my-2 mx-4 rounded text-sm px-4 py-2 overflow-x-scroll leading-8"
          }
        >
          <code className="text-xs leading-6">{value.code}</code>
        </pre>
      ),
    },
    block: {
      normal: ({ children }) => <p className="mt-4">{children}</p>,
      h1: ({ children, value }) => (
        // Add an anchor to the h1
        <h1 className="group relative">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h1>
      ),
      h2: ({ children, value }) => (
        <h2 className="group relative">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h2>
      ),
      h3: ({ children, value }) => (
        <h3 className="group relative font-medium my-2 py-1 border-b text-xl">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h3>
      ),
    },
    marks: {
      link: ({ children, value: link }) => (
        <ResolvedLink link={link}>{children}</ResolvedLink>
      ),
      code: ({ children }) => (
        <code className="bg-slate-200 px-1 py-0.5 text-xs text-slate-600">
          {children}
        </code>
      ),
      strong: ({ children }) => (
        <strong className="font-semibold text-slate-800">{children}</strong>
      ),
    },
  };

  return (
    <article className="px-4 leading-8 break-keep font-light text-lg cursor-default">
      <PortableText components={components} value={value} />
    </article>
  );
}
