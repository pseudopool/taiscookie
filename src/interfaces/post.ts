type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  blurDataURL: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
