import Image from "next/image";

import { fetchPosts } from "@/apis/fetchPosts";
import { formatNotionPost } from "@/libs/formatNotionPost";
import { Post } from "@/types/post";

const PostsPage = async () => {
  const allPosts = await fetchPosts().then((res) =>
    res.results.map((post: any) => formatNotionPost(post))
  );

  return (
    <ul className="p-6 w-full grid grid-cols-2 gap-6 lg:grid-cols-3">
      {allPosts.map((post: Post) => (
        <li key={post.id} className="w-full border-2 border-black text-center">
          <Image
            className="w-full"
            src="/main.jpeg"
            alt={post.title}
            width={200}
            height={200}
          />
          <div className="p-4 font-mono break-keep flex flex-col gap-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostsPage;
