import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import CategoriesSelector from ".";
import { data } from "../../data/data";

describe("CategoriesSelector", () => {
  it("vykresli odkaz pro kazdou generaci z JSON dat", () => {
    render(<CategoriesSelector categories={data.categories} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(data.categories.length);
    data.categories.forEach((category, index) => {
      expect(links[index]).toHaveTextContent(category.label);
      expect(links[index].getAttribute("href")).toMatch(
        new RegExp(`${category.generation}$`),
      );
    });
  });

  it("pri najeti mysi ukaze casove obdobi generace", () => {
    render(<CategoriesSelector categories={data.categories} />);
    const [first] = data.categories;
    const title = screen.getByText("Generace");
    const period = title.nextElementSibling as HTMLElement;

    expect(period).toBeEmptyDOMElement();
    expect(period).toHaveClass("opacity-0");
    expect(title).toHaveClass("opacity-100");

    const link = screen.getByRole("link", { name: first.label });
    fireEvent.mouseEnter(link);
    expect(period).toHaveTextContent(first.period);
    expect(period).toHaveClass("opacity-100");
    expect(title).toHaveClass("opacity-0");

    fireEvent.mouseLeave(link);
    expect(period).toHaveClass("opacity-0");
    expect(title).toHaveClass("opacity-100");
  });
});
