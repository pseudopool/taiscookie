import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {addNavigationJsonLd} from 'utils/addNavigationJsonLd';
import {css} from '@emotion/react';

export default function Layout({children}: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>타이의 쿠키</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Take a bite." />
        <meta name="og:title" content="Tai's Cookie" />
        <meta property="og:description" content="Take a bite." />
        <meta
          property="og:image"
          content="https://github.com/pseudopool/taiscookie/blob/main/public/post-background.png?raw=true"
        />
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
      <main css={layout}>{children}</main>
      <Footer />
    </>
  );
}

const layout = css`
  width: min(100%, 1000px);
  margin-inline: auto;
`;
