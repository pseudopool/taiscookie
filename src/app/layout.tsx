import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navigator from "@/components/navigator";
import Image from "next/image";
import Link from "next/link";

const noto_sans_kr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tai's Cookie",
  description: "Take a bite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={noto_sans_kr.className}>
        <Navigator />
        {children}
        <footer className="w-full flex flex-col items-center justify-center pt-8 pb-12">
          <Link href="https://github.com/pseudopool" target="_blank">
            <Image src="/github.svg" alt="github" width={40} height={40} />
          </Link>
        </footer>
      </body>
    </html>
  );
}
