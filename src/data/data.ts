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

// "IBM System/360" -> "ibm-system-360"
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
