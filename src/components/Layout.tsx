import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="DDEZrz9lubJFHFHFDO426TLckWKDClbXLoB4_T3RVk8"
        />
        <title>타이의 쿠키</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
