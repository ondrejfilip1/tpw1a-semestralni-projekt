import { useScramble } from "use-scramble";

interface HeadingProps {
  text: string;
  className?: string;
}

export default function Heading(props: HeadingProps) {
  // animace na skladani slov/textu
  const { ref, replay } = useScramble({
    text: props.text,
    speed: 0.9,
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 10,
    chance: 1,
    overdrive: false,
    overflow: false,
    range: [65, 90],
    ignore: [" ", "\n"],
  });

  return (
    <h1
      aria-label={props.text}
      onFocus={replay}
      className={`relative whitespace-pre-line ${props.className ?? ""}`}
    >
      <span aria-hidden className="invisible">
        {props.text}
      </span>
      <span ref={ref} aria-hidden className="absolute inset-0">
        {props.text}
      </span>
    </h1>
  );
}
