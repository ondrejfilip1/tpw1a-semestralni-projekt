import type { ReactNode } from "react";

export interface HeaderLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function HeaderLink(props: HeaderLinkProps) {
  return (
    <a
      href={props.href}
      className="truncate bg-primary flex justify-between gap-base px-4 py-2 transition-colors outline-none sm:text-lead text-body items-center"
    >
      {props.icon}
      <span>{props.label}</span>
    </a>
  );
}
