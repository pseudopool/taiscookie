export const formatNotionPost = (post: any) => {
  return {
    title: post.properties.title.title[0].plain_text,
    date: post.properties.date.date.start,
    id: post.id,
    url: post.url,
    excerpt: post.properties.excerpt.rich_text[0].plain_text,
    backgroundColor: post.properties.backgroundColor.rich_text[0].plain_text,
  };
};
