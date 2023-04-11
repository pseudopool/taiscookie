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
      width="800px"
      height="800px"
      alt={`Cover Image for ${title}`}
      placeholder="blur"
      blurDataURL={blurDataURL}
      objectFit="cover"
    />
  );
};

export default CoverImage;
