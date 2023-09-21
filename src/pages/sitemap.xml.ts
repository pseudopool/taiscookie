import fetchPosts from 'apis/fetchPosts';
import {URL} from 'consts/url';
import {Post} from 'interfaces/post';
import {formatNotionPost} from 'utils/formatNotionPost';

const POSTS_URL = URL + '/posts';

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://taiscookie.vercel.app</loc>
     </url>
     <url>
       <loc>https://taiscookie.vercel.app/works</loc>
     </url>
     <url>
     <loc>https://taiscookie.vercel.app/posts</loc>
   </url>
     ${posts
       .map(({id}) => {
         return `
       <url>
           <loc>${`${POSTS_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({res}: any) {
  // We make an API call to gather the URLs for our site
  const posts = await fetchPosts().then(res =>
    res.results.map((post: any) => formatNotionPost(post))
  );

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
