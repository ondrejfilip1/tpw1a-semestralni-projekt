import { type Computer } from "../../data/data";

interface ComputerItemProps {
  shouldFlip: boolean;
  computer: Computer;
}

export default function ComputerItem(props: ComputerItemProps) {
  return (
    <article className="flex gap-12 justify-between">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-tertiary text-xl">{props.computer.year}</p>
        <h2 className="font-display">{props.computer.name}</h2>
        <p className="text-xl max-w-sm text-justify mt-2 text-primary">
          {props.computer.description}
        </p>
      </div>
      <div className={`flex-1 ${props.shouldFlip ? "order-first" : ""}`}>
        <img
          src={props.computer.image.src}
          alt={props.computer.image.alt}
          className="max-h-124 w-full object-contain"
          loading="lazy"
        />
      </div>
    </article>
  );
}
