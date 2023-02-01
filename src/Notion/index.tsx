const borderStyle = {
  border: "1px solid #000000",
  backgroundColor: "#d1d0d0b5",
};

export const Notion = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 className="test">Importante</h1>
      <h2 style={{ color: "#fb8500" }}>
        Principal diferença entre <strong>get x query x find</strong>
        em testes.
      </h2>

      <table style={borderStyle}>
        <tr>
          <th style={borderStyle}>Get</th>
          <th style={borderStyle}>Query</th>
          <th style={borderStyle}>Find</th>
        </tr>
        <tr>
          <td style={borderStyle}>
            retorna o nó correspondente, no entanto, lançará um erro se várias
            correspondências ou nenhuma correspondência for encontrada.
          </td>
          <td style={borderStyle}>
            retorna o nó correspondente se uma correspondência for encontrada e
            nulo se nenhuma correspondência for encontrada; no entanto, lançará
            um erro se várias correspondências forem encontradas.
          </td>
          <td style={borderStyle}>
            retorna uma promessa que retorna o nó correspondente, no entanto,
            lançará um erro se várias correspondências ou nenhuma
            correspondência for encontrada.
          </td>
        </tr>
        <tr>
          <td style={borderStyle}>
            Use esses métodos se você espera que o elemento
          </td>
          <td style={borderStyle}>
            Use esses métodos se estiver procurando confirmar a presença de um
            elemento/elementos.
          </td>
          <td style={borderStyle}>
            Use esses métodos se o elemento/elementos que estão sendo
            consultados puderem ser exibidos de forma assíncrona (por exemplo,
            se for esperado que seu elemento seja exibido apenas após um evento
            ser acionado, considere o uso de localizar, pois ele repete a
            consulta após algum tempo).
          </td>
        </tr>
      </table>
    </div>
  );
};
