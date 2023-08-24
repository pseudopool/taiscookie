import { URL } from "consts/url";

export const addNavigationJsonLd = () => {
  return {
    __html: `{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Home',
            description: 'Tai is a software engineer based in Seoul.',
            url: ${URL},
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Posts',
            description: 'Posts about software engineering, life, and more.',
            url: '${URL}/posts',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Works',
            description: 'The list of projects Tai has worked on.',
            url: '${URL}/works',
          }
        ],
      }`,
  };
};
