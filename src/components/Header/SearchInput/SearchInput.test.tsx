import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import SearchInput from ".";
import type { SearchItem } from "../../../data/data";

// polozky vyhledavani
const items: SearchItem[] = [
  { name: "ENIAC", year: 1945, url: "/prvni/eniac" },
  { name: "EDVAC", year: 1949, url: "/prvni/edvac" },
  { name: "IBM 7090", year: 1959, url: "/druha/ibm-7090" },
  { name: "IBM System/360", year: 1964, url: "/treti/ibm-system-360" },
  { name: "IBM PC", year: 1981, url: "/ctvrta/ibm-pc" },
  { name: "IBM ThinkPad", year: 1992, url: "/ctvrta/ibm-thinkpad" },
  { name: "IBM Q System One", year: 2019, url: "/budoucnost/ibm-q" },
];

// vykresluju komponentu
const setup = () => {
  render(<SearchInput items={items} />);
  return screen.getByRole("textbox", { name: /vyhledat počítač/i });
};

describe("SearchInput", () => {
  it("bez zadaneho textu nezobrazuje vysledky", () => {
    const input = setup();
    fireEvent.focus(input);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(input).toHaveAttribute("aria-expanded", "false");
  });

  it("filtruje polozky podle nazvu bez ohledu na velikost pismen", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "  eNiAc " } });

    const list = screen.getByRole("list");
    const links = within(list).getAllByRole("link");
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveTextContent("ENIAC");
    expect(links[0]).toHaveTextContent("1945");
    expect(links[0]).toHaveAttribute("href", "/prvni/eniac");
    expect(input).toHaveAttribute("aria-expanded", "true");
  });

  it("zobrazi nejvyse 5 vysledku", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "ibm" } });

    expect(within(screen.getByRole("list")).getAllByRole("link")).toHaveLength(
      5,
    );
  });

  it("pri zadnem shode zobrazi hlasku", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "commodore" } });

    expect(screen.getByText("Nic nenalezeno")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("Escape zavre vysledky, opetovny fokus je znovu otevre", () => {
    const input = setup();
    fireEvent.change(input, { target: { value: "ed" } });
    expect(screen.getByRole("list")).toBeInTheDocument();

    fireEvent.keyDown(input, { key: "Escape" });
    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    fireEvent.focus(input);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("Enter presmeruje na prvni vysledek", () => {
    const replace = vi.fn();
    vi.stubGlobal("location", { ...window.location, replace });

    const input = setup();
    fireEvent.change(input, { target: { value: "ibm p" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(replace).toHaveBeenCalledWith("/ctvrta/ibm-pc");
    vi.unstubAllGlobals();
  });
});
