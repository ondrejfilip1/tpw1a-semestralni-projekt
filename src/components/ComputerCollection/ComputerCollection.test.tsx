import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ComputerCollection from ".";
import { data } from "../../data/data";

const [category] = data.categories;

function renderCollection() {
  render(
    <ComputerCollection
      computers={category.computers}
      generation={category.generation}
    />,
  );
}

describe("ComputerCollection", () => {
  it("vykresli kazdy pocitac z JSON dat", () => {
    renderCollection();

    expect(screen.getAllByRole("article")).toHaveLength(
      category.computers.length,
    );
  });

  it("prepina mezi seznamem a mrizkou", () => {
    renderCollection();
    const list = screen.getByRole("list");
    const listButton = screen.getByRole("button", { name: "Seznam" });
    const gridButton = screen.getByRole("button", { name: "Mřížka" });

    expect(listButton).toHaveAttribute("aria-pressed", "true");
    expect(list).toHaveClass("grid-cols-1");

    fireEvent.click(gridButton);
    expect(gridButton).toHaveAttribute("aria-pressed", "true");
    expect(listButton).toHaveAttribute("aria-pressed", "false");
    expect(list).toHaveClass("grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]");
  });
});
