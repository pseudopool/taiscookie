import Image from "next/image";

export default function Home() {
  return (
    <article>
      <Image
        src="/main.jpeg"
        alt="Tai seating on a cloud with a laptop and two dogs."
        width={200}
        height={200}
        className="rounded"
      />
    </article>
  );
}
