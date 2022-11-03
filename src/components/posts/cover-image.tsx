/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { css } from "@emotion/react";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  blurDataURL: string;
  slug?: string;
};

const CoverImage = ({ title, src, blurDataURL, slug }: Props) => {
  const image = (
    <div
      css={css`
        width: 100px;
        height: 100px;
        margin-left: 1rem;
      `}
    >
      <Image
        src={src}
        width="100px"
        height="100px"
        alt={`Cover Image for ${title}`}
        css={css`
          object-fit: cover;
          border-radius: 1rem;
        `}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
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
