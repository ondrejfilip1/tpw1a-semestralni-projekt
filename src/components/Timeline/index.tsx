import { CircleDot } from "lucide-react";
import type { Category } from "../../data/data";
import { BASE_URL } from "../../data/data";

interface TimelineProps {
  categories: Category[];
}

export default function Timeline(props: TimelineProps) {
  return (
    <div className="flex md:flex-row flex-col w-full md:overflow-hidden min-h-timeline px-roomy">
      {props.categories.map((value, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-col not-last:w-full items-center not-last:justify-center"
        >
          <a href={`${BASE_URL}${value.generation}`} className="group outline-none">
            <div className="text-center relative">
              <CircleDot className="mx-auto rounded-full group-hover:scale-150 group-focus-visible:scale-150 group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-tertiary transition-transform" />
              <p className="min-w-timeline-label absolute md:left-1/2 md:-translate-x-1/2 translate-x-[-110%] -translate-y-1/2 top-1/2 md:top-full md:translate-y-0 flex flex-col">
                <span className="text-large">{value.label}</span>
                <span className="min-w-full text-caption">{value.period}</span>
              </p>
            </div>
          </a>
          {index !== props.categories.length - 1 && (
            <div className="md:w-full w-px bg-line h-[8vh] md:h-px md:mx-micro my-micro md:my-0"></div>
          )}
        </div>
      ))}
    </div>
  );
}
