import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navigator from "@/components/navigator";
import Footer from "@/components/footer";

const noto_sans_kr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tai's Cookie",
  description: "Take a bite.",
  verification: {
    google: "DDEZrz9lubJFHFHFDO426TLckWKDClbXLoB4_T3RVk8",
  },
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
        <main className="flex w-full flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
