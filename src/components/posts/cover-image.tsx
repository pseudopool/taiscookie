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
    <div css={img}>
      <Image
        src={src}
        width="100px"
        height="100px"
        alt={`Cover Image for ${title}`}
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

const img = css`
  width: 100px;
  height: 100px;
  margin-left: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export default CoverImage;
