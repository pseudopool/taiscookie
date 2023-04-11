export type Portfolio = {
  path: string;
  title: string;
  date: string;
  thumbnail: string;
  blurDataURL: string;
  content: Content;
};

export type Content = {
  imageUrl: string;
  blurDataURL: string;
  name: string;
  summary: string;
  role: string;
  stack: string[];
  period: string;
  website: string;
  description: string;
  accheivement: string[];
};
