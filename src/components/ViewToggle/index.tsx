import type { ReactNode } from "react";
import { LayoutGrid, List } from "lucide-react";

export type CollectionView = "list" | "grid";

interface ViewToggleProps {
  view: CollectionView;
  onChange: (view: CollectionView) => void;
}

interface ViewOption {
  value: CollectionView;
  label: string;
  icon: ReactNode;
}

const viewOptions: ViewOption[] = [
  { value: "list", label: "Seznam", icon: <List /> },
  { value: "grid", label: "Mřížka", icon: <LayoutGrid /> },
];

export default function ViewToggle(props: ViewToggleProps) {
  return (
    <div
      role="group"
      aria-label="Zobrazení počítačů"
      className="flex gap-tight sm:text-lead text-body"
    >
      {viewOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={props.view === option.value}
          onClick={() => props.onChange(option.value)}
          className={`flex items-center gap-tight px-4 py-2 cursor-pointer border transition-colors focus-visible:text-tertiary ${props.view === option.value ? "border-primary/50 shadow-[-4px_4px_0px] shadow-primary/50" : "border-transparent"}`}
        >
          {option.icon}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
