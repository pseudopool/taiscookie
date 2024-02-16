import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navigator from "@/components/navigator";

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
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
