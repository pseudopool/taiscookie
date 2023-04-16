import { css } from "@emotion/react";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
  blurDataURL: string;
};

const CoverImage = ({ src, title, blurDataURL }: Props) => {
  return (
    <Image
      src={src}
      width={800}
      height={800}
      alt={`Cover Image for ${title}`}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
};

export default CoverImage;
