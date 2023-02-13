import { findByText, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("Should render list items", () => {
    render(<App />);

    expect(screen.getByText("Otávio")).toBeInTheDocument();
    expect(screen.getByText("Matheus")).toBeInTheDocument();
    expect(screen.getByText("Jhony")).toBeInTheDocument();
  });

  it("Should be able to add a new item to the list", async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("Digite um nome");
    const addButton = screen.getByText("Adicionar");

    fireEvent.change(inputElement, { target: { value: "Novo" } });
    fireEvent.click(addButton);

    expect(await screen.findByText("Novo")).toBeInTheDocument();
  });
});
