import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
