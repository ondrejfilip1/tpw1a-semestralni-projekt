import projectData from "./data.json";

export const BASE_URL = import.meta.env.BASE_URL;

export interface JSONData {
  categories: Category[];
}

export type Categories =
  | "nulta"
  | "prvni"
  | "druha"
  | "treti"
  | "ctvrta"
  | "budoucnost";

export interface Category {
  generation: Categories;
  name: string;
  label: string;
  description: string;
  computers: Computer[];
}

export interface Computer {
  name: string;
  slug: string;
  year: number;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  article: ComputerArticle;
}

export interface ComputerArticle {
  heading: string;
  article: string;
  sources: Source[];
}

// zkracena polozka pro vyhledavani, aby se do prohlizece neposilaly cele clanky
export interface SearchItem {
  name: string;
  year: number;
  url: string;
}

interface Source {
  link: string;
  label: string;
}

export const data = projectData as JSONData;
