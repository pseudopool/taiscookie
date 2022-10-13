/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { css } from "@emotion/react";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      width="100px"
      height="100px"
      css={css`
        width: 100px;
        height: 100px;
        border-radius: 1rem;
        object-fit: cover;
        margin-left: 1rem;
      `}
    />
  );
  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default CoverImage;
