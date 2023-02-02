import { useState } from "react";
import { Notion } from "./Notion";

const App = () => {
  const [listNames, setListNames] = useState(["Otávio", "Matheus", "Jhony"]);

  function handleUpdateListName() {
    setListNames((state) => [...state, "Novo"]);
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
