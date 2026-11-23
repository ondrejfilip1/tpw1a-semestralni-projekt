import { ChevronRight } from "lucide-react";
import { BASE_URL } from "../../data/data";

interface GenerationItemProps {
  generation: string;
  label: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function GenerationItem(props: GenerationItemProps) {
  return (
    <a
      key={props.generation}
      href={`${BASE_URL}${props.generation}`}
      className="group relative flex items-center"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      <ChevronRight className="absolute opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 duration-250 transition-opacity" />
      <p className="group-hover:pl-relaxed group-focus-visible:pl-relaxed transition-[padding-left] duration-250">
        {props.label}
      </p>
    </a>
  );
}
