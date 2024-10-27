export type Proyecto = {
  name: string;
  description: string;
  img: ImageMetadata;
  link: Link;
  stack: Array<any>;
};

type Link = {
  site: string;
  github: string;
};
export type Titles = {
  title: string;
  image: ImageMetadata;
  link: string;
};
