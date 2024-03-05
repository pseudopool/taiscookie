import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="w-full flex flex-col items-center justify-center pt-8 pb-12">
    <Link href="https://github.com/pseudopool" target="_blank">
      <Image src="/github.svg" alt="github" width={40} height={40} />
    </Link>
  </footer>
);

export default Footer;
