import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { addNavigationJsonLd } from "utils/addNavigationJsonLd";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>타이의 쿠키</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="DDEZrz9lubJFHFHFDO426TLckWKDClbXLoB4_T3RVk8"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addNavigationJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
