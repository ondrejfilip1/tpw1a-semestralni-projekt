import { useEffect, useRef, useState } from "react";
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
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
    if (open) setShow(true);
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (!openRef.current) setShow(y < lastY || y <= 0);
      lastY = y;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
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
    <>
      <header
        className={`fixed top-0 left-0 w-full md:px-wide px-4 py-base flex justify-between z-20 transition-transform ${show ? "translate-y-0" : "-translate-y-full"}`}
      >
        <SearchInput items={props.searchItems} />

        <nav className="sm:flex items-center hidden">
          {links.map((link) => (
            <HeaderLink key={link.href} {...link} style="desktop" />
          ))}
        </nav>
        <button
          type="button"
          className="flex items-center sm:hidden cursor-pointer"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu
            className={`[&_path]:transition-[translate,rotate,opacity] [&_path:nth-child(1)]:origin-[12px_5px] [&_path:nth-child(3)]:origin-[12px_19px] ${open ? "[&_path:nth-child(1)]:translate-y-1.75 [&_path:nth-child(1)]:rotate-45 [&_path:nth-child(2)]:opacity-0 [&_path:nth-child(3)]:-translate-y-1.75 [&_path:nth-child(3)]:-rotate-45" : ""}`}
          />
        </button>
      </header>

      <nav
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        className={`fixed inset-0 z-10 flex flex-col items-start justify-center pl-4 text-center gap-base sm:hidden transition-[opacity,backdrop-filter] duration-250 ${open ? "opacity-100 backdrop-blur-2xl" : "opacity-0 backdrop-blur-none pointer-events-none"}`}
      >
        {links.map((link) => (
          <div key={link.href} onClick={() => setOpen(false)}>
            <HeaderLink {...link} style="mobile" />
          </div>
        ))}
      </nav>
    </>
  );
}
