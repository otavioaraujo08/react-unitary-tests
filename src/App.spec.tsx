import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("Should render list items", () => {
    render(<App />);

    expect(screen.getByText("Otávio")).toBeInTheDocument();
    expect(screen.getByText("Matheus")).toBeInTheDocument();
    expect(screen.getByText("Jhony")).toBeInTheDocument();
  });

  it("Should be able to add a new item to the list", () => {
    render(<App />);

    const addButton = screen.getByText("Adicionar");

    fireEvent.click(addButton);

    expect(screen.getByText("Novo")).toBeInTheDocument();
  });
});
