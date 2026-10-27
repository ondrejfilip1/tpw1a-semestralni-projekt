import { useState } from "react";
import { type Category } from "../../data/data"
import GenerationItem from "../GenerationItem";

interface CategoriesSelectorProps {
  categories: Category[];
}

export default function CategoriesSelector(props: CategoriesSelectorProps) {
  const [hovered, setHovered] = useState<Category | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <h2 className="font-sans relative">
        <span className={`transition-opacity ${isHovering ? "opacity-0" : "opacity-100"}`}>Generace</span>
        <span className={`absolute top-0 inset-x-0 truncate transition-opacity ${isHovering ? "opacity-100" : "opacity-0"}`}>{hovered?.period}</span>
      </h2>
      <div className="flex flex-col gap-base md:text-large text-lead font-sans text-tertiary md:items-start items-center">
          {props.categories.map((category, index) => (
              <GenerationItem
                key={index}
                {...category}
                onMouseEnter={() => { setHovered(category); setIsHovering(true); }}
                onMouseLeave={() => setIsHovering(false)}
              />
          ))}
      </div>
    </>
  )
}
