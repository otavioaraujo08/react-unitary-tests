import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("Should render list items", () => {
    render(<App />);

    expect(screen.getByText("Otávio")).toBeInTheDocument();
    expect(screen.getByText("Matheus")).toBeInTheDocument();
    expect(screen.getByText("Jhony")).toBeInTheDocument();
  });
});
