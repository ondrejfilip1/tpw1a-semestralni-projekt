import { useEffect, useState } from "react";
import type { SearchItem } from "../../data/data";
import SearchInput from "./SearchInput";

interface HeaderProps {
  searchItems: SearchItem[];
}

export default function Header(props: HeaderProps) {
  const [show, setShow] = useState(true);

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

  return (
    <div
      className={`fixed top-0 left-0 w-full md:px-wide px-4 py-base flex justify-between z-20 transition-transform ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <SearchInput items={props.searchItems} />
    </div>
  );
}
