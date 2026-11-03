import { useEffect, useState } from "react";
import { BASE_URL, type SearchItem } from "../../data/data";
import SearchInput from "./SearchInput";
import { House, Info, Menu, RotateCwClock } from "lucide-react";
import HeaderLink, { type HeaderLinkProps } from "../HeaderLink";

interface HeaderProps {
  searchItems: SearchItem[];
  currentPath: string;
}

export default function Header(props: HeaderProps) {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY: number = 0;

    window.onscroll = () => {
      setShow(window.scrollY < lastY);
      lastY = window.scrollY;
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  const links: HeaderLinkProps[] = [
    { href: BASE_URL, icon: <House />, label: "Zpět na úvod" },
    { href: `${BASE_URL}o-nas`, icon: <Info />, label: "O nás" },
    {
      href: `${BASE_URL}casova-osa`,
      icon: <RotateCwClock />,
      label: "Časová osa",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full md:px-wide px-4 py-base flex justify-between z-20 transition-transform ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <SearchInput items={props.searchItems} />

      <nav className="sm:flex items-center hidden">
        {links.map((link) => (
          <HeaderLink key={link.href} {...link} />
        ))}
      </nav>
      <nav className="flex items-center sm:hidden">
        <Menu
          className={`[&_path]:transition-[translate,rotate,opacity] [&_path:nth-child(1)]:origin-[12px_5px] [&_path:nth-child(3)]:origin-[12px_19px] ${open ? "[&_path:nth-child(1)]:translate-y-1.75 [&_path:nth-child(1)]:rotate-45 [&_path:nth-child(2)]:opacity-0 [&_path:nth-child(3)]:-translate-y-1.75 [&_path:nth-child(3)]:-rotate-45" : ""}`}
          onClick={() => setOpen(!open)}
        />
      </nav>
    </div>
  );
}
