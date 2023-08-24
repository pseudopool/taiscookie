export type Work = {
  name: string;
  description: string;
  url: string;
  image: string;
  role: string;
  period: string;
  tech: string[];
  projects: Project[];
};

type Project = {
  name: string;
  description: string;
  url: string;
  period: string;
};
