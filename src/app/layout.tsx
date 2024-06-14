import type { Metadata } from "next";
import "./globals.css";
import Navigator from "@/components/navigator";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

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
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Navigator />
        <main className="flex w-full flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
