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

export const CATEGORIES_LABELS = [
  "Nultá",
  "První",
  "Druhá",
  "Třetí",
  "Čtvrtá",
  "Budoucnost",
];

export interface Category {
  generation: Categories;
  name: string;
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

interface Source {
  link: string;
  label: string;
}
