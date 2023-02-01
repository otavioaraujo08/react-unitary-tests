import { useState } from "react";
import { Notion } from "./Notion";

const App = () => {
  const [listNames, setListNames] = useState<string[]>([
    "Otávio",
    "Matheus",
    "Jhony",
  ]);

  const handleUpdateListName = () => {
    setListNames([...listNames, "Novo nome"]);
  };
  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>Lista de nomes</h1>

        {listNames.map((name) => (
          <li>{name}</li>
        ))}

        <button onClick={handleUpdateListName} style={{ marginTop: "1rem" }}>
          Clique aqui para adicionar um novo nome
        </button>
      </header>
      <body>
        <Notion />
      </body>
    </>
  );
};

export default App;
