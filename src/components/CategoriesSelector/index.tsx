import { BASE_URL, type Category } from "../../data/data"
import { ChevronRight } from "lucide-react"

interface CategoriesSelectorProps {
  categories: Category[];
}

export default function CategoriesSelector(props: CategoriesSelectorProps) {
  return (
    <div className="flex flex-col gap-base md:text-large text-lead font-sans text-tertiary md:items-start items-center">
        {props.categories.map((category) => (
            <a key={category.generation} href={`${BASE_URL}${category.generation}`} className="group relative flex items-center">
                <ChevronRight className="absolute opacity-0 group-hover:opacity-100 duration-250 transition-opacity" />
            <p className="group-hover:pl-relaxed transition-[padding-left] duration-250">{category.label}</p></a>
        ))}
    </div>
  )
}
