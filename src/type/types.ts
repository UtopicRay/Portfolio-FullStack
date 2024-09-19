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
