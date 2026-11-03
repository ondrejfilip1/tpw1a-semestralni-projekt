import type { CSSProperties } from "react";
import { BASE_URL, type Category } from "../../data/data";

interface ComputerMosaicProps {
  categories: Category[];
}

export default function ComputerMosaic(props: ComputerMosaicProps) {
  const computers = props.categories.flatMap((category) =>
    category.computers.slice(0, 2),
  );

  const getRandomRotation = (): number => {
    return Math.floor(Math.random() * 12 - 12);
  };

  return (
    <ul className="flex md:flex-col group items-center">
      {computers.map((computer, index) => {
        const src = `${BASE_URL}${computer.image.src}`;
        const style = {
          "--step": index / (computers.length - 1),
          "--rotation": `${getRandomRotation()}deg`,
          maskImage: `url(${src})`,
        } as CSSProperties;

        return (
          <li
            key={computer.slug}
            className="group-hover:rotate-(--rotation) transition-[rotate] duotone flex-1 min-w-0 max-w-64 h-24 not-first:-ml-wide md:flex-none md:h-40 md:not-first:ml-0 md:not-first:mt-[-6.6rem]"
            style={style}
          >
            <img
              src={src}
              alt={computer.image.alt}
              className="size-full object-contain"
              loading="lazy"
            />
          </li>
        );
      })}
    </ul>
  );
}
