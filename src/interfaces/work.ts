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

export type Project = {
  name: string;
  description: string;
  period: string;
  features: string[];
};
