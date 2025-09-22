import type { Post as PostType } from "@/types/post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { createDataAttribute } from "next-sanity";

import Image from "next/image";
import Link from "next/link";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s 전",
    s: "1초",
    m: "1분",
    mm: "%d분",
    h: "1시간",
    hh: "%d시간",
    d: "1일",
    dd: "%d일",
    M: "1달",
    MM: "%d달",
    y: "1년",
    yy: "%d년",
  },
});

type Props = {
  post: PostType;
  index: number;
};

const Post = ({ post, index }: Props) => {
  const attr = createDataAttribute({
    id: post.id,
    type: "post",
    path: "title",
  });

  return (
    <li key={post.id} className="w-full">
      <article data-sanity={attr()}>
        <Link href={`/posts/${post.url}`} className="w-full">
          <Image
            className="w-full object-cover"
            src={`/posts/${index}.jpeg`}
            alt={post.title}
            width={200}
            height={200}
          />
          <div className="break-keep flex flex-col">
            <h2 className="border-black border-b-2 p-2 text-xl font-medium">
              {post.title}
            </h2>
            <p className="border-black border-b-2 p-2 text-gray-500 font-light">
              {post.excerpt}
            </p>
            <span className="text-sm text-right p-1 bg-highlight">
              {dayjs(post.date).fromNow()}
            </span>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default Post;
