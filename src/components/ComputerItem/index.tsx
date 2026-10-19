import { ArrowUpRight } from "lucide-react";
import { BASE_URL, type Categories, type Computer } from "../../data/data";

interface ComputerItemProps {
  shouldFlip: boolean;
  computer: Computer;
  generation: Categories;
}

export default function ComputerItem(props: ComputerItemProps) {
  return (
    <article className="flex gap-12 justify-between sm:flex-row flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-tertiary sm:text-xl text-base">
          {props.computer.year}
        </p>
        <h2 className="font-display">{props.computer.name}</h2>
        <p className="sm:text-xl text-base max-w-sm text-justify mt-2 text-primary">
          {props.computer.description}
        </p>
      </div>
      <div
        className={`flex-1 relative ${props.shouldFlip ? "sm:order-first" : ""}`}
      >
        <a
          href={`${BASE_URL}${props.generation}/${props.computer.slug}`}
          className="peer"
        >
          <img
            src={`${BASE_URL}${props.computer.image.src}`}
            alt={props.computer.image.alt}
            style={{
              viewTransitionName: `computer-${props.computer.slug}`,
            }}
            className="sm:max-h-124 max-h-64 w-full object-contain hover:blur-md transition-[filter]"
            loading="lazy"
          />
        </a>
        <span className="flex items-center gap-4 text-shadow-primary/40 text-shadow-[-3px_3px_0px] md:text-6xl text-4xl leading-tight tracking-tight text-tertiary font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none opacity-0 peer-hover:opacity-100 transition-opacity duration-250">
          Článek
          <span className="-rotate-90">V</span>
        </span>
      </div>
    </article>
  );
}
