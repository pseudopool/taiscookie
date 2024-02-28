import Image from "next/image";

import { fetchPosts } from "@/apis/fetchPosts";
import { formatNotionPost } from "@/libs/formatNotionPost";
import { Post } from "@/types/post";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

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

const PostsPage = async () => {
  const allPosts = await fetchPosts().then((res) =>
    res.results.map((post: any) => formatNotionPost(post))
  );

  return (
    <ul className="p-6 w-full grid grid-cols-2 gap-6 lg:grid-cols-3">
      {allPosts.map((post: Post, index: number) => (
        <li key={post.id} className="w-full border-2 border-black text-center">
          <Image
            className="w-full object-cover"
            src={`/posts/${index}.jpeg`}
            alt={post.title}
            width={200}
            height={200}
          />
          <div className="p-4 font-mono break-keep flex flex-col gap-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <span>{dayjs(post.date).fromNow()}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostsPage;
