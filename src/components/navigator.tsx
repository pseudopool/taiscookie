import Link from "next/link";

const Navigator = () => {
  return (
    <nav className="p-2 sticky top-0 bg-white border-b-2 border-black">
      <ul className="flex w-full items-center justify-around font-mono font-semibold">
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li>
          <Link href="/etc">Etc</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
