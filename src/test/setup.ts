import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// po kazdem testu odmountovat komponenty, aby se DOM nemichal mezi testy
afterEach(() => {
  cleanup();
});
