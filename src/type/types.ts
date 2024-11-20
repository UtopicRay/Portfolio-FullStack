import type { ReactNode } from "react";

export type Proyecto = {
  name: string;
  description: string;
  img: ImageMetadata;
  link: Link;
  stack: Array<ReactNode>;
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
