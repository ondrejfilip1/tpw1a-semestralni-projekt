import type { ReactNode } from "react";

export interface HeaderLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  style?: "desktop" | "mobile";
}

export default function HeaderLink(props: HeaderLinkProps) {
  return (
    <a
      href={props.href}
      className={`truncate flex justify-between gap-base px-4 py-2 transition-colors focus-visible:text-tertiary sm:text-lead text-body items-center ${props.style === "desktop" ? "bg-primary" : "text-xl"}`}
    >
      {props.icon}
      <span>{props.label}</span>
    </a>
  );
}
