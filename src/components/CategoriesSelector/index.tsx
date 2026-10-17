import { CATEGORIES_LABELS } from "../../data/data"
import { ChevronRight } from "lucide-react"
import projectData from "../../data/data.json"

export default function CategoriesSelector() {
  return (
    <div className="flex flex-col gap-4 md:text-2xl text-xl font-sans text-tertiary md:items-start items-center">
        {CATEGORIES_LABELS.map((value, index) => (
            <a key={index} href={`/${projectData.categories[index].generation}`} className="group relative flex items-center">
                <ChevronRight className="absolute opacity-0 group-hover:opacity-100 duration-250 transition-opacity" />
            <p className="group-hover:pl-6 transition-[padding-left] duration-250">{value}</p></a>
        ))}
    </div>
  )
}
