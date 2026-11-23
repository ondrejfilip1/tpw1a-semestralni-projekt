import { useState, type ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { BASE_URL, type Categories, type Computer } from "../../data/data";
import ComputerItem from "../ComputerItem";
import ViewToggle, { type CollectionView } from "../ViewToggle";

interface ComputerCollectionProps {
  computers: Computer[];
  generation: Categories;
  children?: ReactNode;
}

export default function ComputerCollection(props: ComputerCollectionProps) {
  const [view, setView] = useState<CollectionView>("list");
  const isGrid = view === "grid";

  return (
    <>
      <div className="min-h-svh flex flex-col justify-center gap-wide">
        <div className="flex justify-between items-center gap-base">
          <a
            href={BASE_URL}
            className="flex items-center text-primary sm:text-lead text-body"
          >
            <ChevronLeft />
            Zpět na úvod
          </a>
          <ViewToggle view={view} onChange={setView} />
        </div>
        {props.children}
      </div>

      <ul
        className={`grid mb-section ${isGrid ? "grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-wider" : "grid-cols-1 gap-section"}`}
      >
        {props.computers.map((computer, index) => (
          <li key={computer.slug} className="@container">
            <ComputerItem
              computer={computer}
              generation={props.generation}
              shouldFlip={!isGrid && index % 2 === 1}
              variant={isGrid ? "card" : "row"}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
