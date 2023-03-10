import { useState } from "react";
import { Notion } from "./Notion";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [listNames, setListNames] = useState(["Otávio", "Matheus", "Jhony"]);

  function handleUpdateListName() {
    setTimeout(() => {
      setListNames((state) => [...state, newItem]);
    }, 500);
  }
  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>Lista de nomes</h1>

        <ul>
          {listNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <input
          placeholder="Digite um nome"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />

        <button onClick={handleUpdateListName} style={{ marginTop: "1rem" }}>
          Adicionar
        </button>
      </header>

      <body>
        <Notion />
      </body>
    </>
  );
};

export default App;
