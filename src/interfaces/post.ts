export type Post = {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  blurDataURL: string;
  excerpt: string;
  backgroundColor: string;
  ogImage: {
    url: string;
  };
  content: string;
};
