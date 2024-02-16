import Image from "next/image";

const dummyPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the first post.",
    image: "/main.jpeg",
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the second post.",
    image: "/main.jpeg",
  },
  {
    id: 3,
    title: "Post 3",
    content: "This is the third post.",
    image: "/main.jpeg",
  },
];

const PostsPage = () => {
  return (
    <ul className="p-6 w-full grid grid-cols-2 gap-6 lg:grid-cols-3">
      {dummyPosts.map((post) => (
        <li key={post.id} className="w-full border-2 border-black text-center">
          <Image
            className="w-full"
            src={post.image}
            alt={post.title}
            width={200}
            height={200}
          />
          <div className="p-4 font-mono">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostsPage;
