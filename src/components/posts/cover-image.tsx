import {css} from '@emotion/react';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  blurDataURL: string;
};

const CoverImage = ({title, src, blurDataURL}: Props) => {
  return (
    <div css={coverImage}>
      <Image
        src={src}
        width={1000}
        height={500}
        alt={`Cover Image for ${title}`}
        placeholder="blur"
        blurDataURL={blurDataURL}
        css={css`
          object-fit: cover;
          border-radius: 1rem;
          height: 200px;
          width: 100%;
        `}
      />
    </div>
  );
};

export default CoverImage;

const coverImage = css`
  width: 100%;
  margin-bottom: 1rem;
  img {
    object-fit: cover;
    border-radius: 0.3rem;
    height: 200px;
    width: 100%;
  }
`;
