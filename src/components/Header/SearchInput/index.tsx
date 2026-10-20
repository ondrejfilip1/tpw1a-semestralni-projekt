import { useState, type FocusEvent } from "react";
import { Search } from "lucide-react";
import type { SearchItem } from "../../../data/data";

interface SearchInputProps {
  items: SearchItem[];
}

export default function SearchInput(props: SearchInputProps) {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const search: string = query.trim().toLowerCase();
  const results: SearchItem[] =
    search === ""
      ? []
      : props.items
          .filter((item) => item.name.toLowerCase().includes(search))
          .slice(0, 5);
  const showResults: boolean = isOpen && search !== "";

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false);
  };

  const handleTyping = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleKeyActions = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Escape":
        setIsOpen(false);
        break;
      case "Enter":
        window.location.replace(results[0].url)
        break;
      default:
        break;
    }
  }

  return (
    <div className="relative" onBlur={handleBlur}>
      <div className="relative px-4 py-2 border border-transparent focus-within:border-primary/50 focus-within:shadow-[-4px_4px_0px] shadow-primary/50 bg-primary transition-[border-color,box-shadow] duration-300 sm:text-lead text-body">
        <input
          className="peer cursor-pointer focus-within:cursor-text"
          type="text"
          name="search"
          id="search"
          placeholder=""
          autoComplete="off"
          aria-controls="search-results"
          aria-expanded={showResults}
          value={query}
          onChange={handleTyping}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyActions}
        />
        <label
          htmlFor="search"
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2 peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0 transition-opacity"
        >
          <Search className="size-5" />
          <span>Vyhledat počítač</span>
        </label>
      </div>

      {showResults && (
        <ul
          id="search-results"
          className="absolute top-full left-0 w-full mt-tight flex flex-col bg-primary border border-primary/50 shadow-[-4px_4px_0px] shadow-primary/50 sm:text-lead text-body"
        >
          {results.length > 0 ? (
            results.map((value) => (
              <li
                key={value.url}
                className="hover:bg-black/5 focus-within:bg-black/5"
              >
                <a
                  href={value.url}
                  className="flex justify-between gap-base px-4 py-2 transition-colors outline-none"
                >
                  <span className="truncate">{value.name}</span>
                  <span className="text-tertiary">{value.year}</span>
                </a>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-center">Nic nenalezeno</li>
          )}
        </ul>
      )}
    </div>
  );
}
