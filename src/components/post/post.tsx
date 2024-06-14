import type { Post as PostType } from "@/types/post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

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

const Post = ({ post, index }: Props) => (
  <li key={post.id} className="w-full border-2 border-black text-center">
    <Link href={`/posts/${post.id}`}>
      <Image
        className="w-full object-cover"
        src={`/posts/${index}.jpeg`}
        alt={post.title}
        width={200}
        height={200}
      />
      <div className="p-4 break-keep flex flex-col gap-4">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-gray-600">{post.excerpt}</p>
        <span>{dayjs(post.date).fromNow()}</span>
      </div>
    </Link>
  </li>
);

export default Post;
