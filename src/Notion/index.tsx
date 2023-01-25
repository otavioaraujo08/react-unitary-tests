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

      <table style={{ border: "1px solid #000000" }}>
        <tr>
          <th style={{ border: "1px solid #000000" }}>Get</th>
          <th style={{ border: "1px solid #000000" }}>Query</th>
          <th style={{ border: "1px solid #000000" }}>Find</th>
        </tr>
        <tr>
          <td>
            retorna o nó correspondente, no entanto, lançará um erro se várias
            correspondências ou nenhuma correspondência for encontrada.
          </td>
          <td>
            retorna o nó correspondente se uma correspondência for encontrada e
            nulo se nenhuma correspondência for encontrada; no entanto, lançará
            um erro se várias correspondências forem encontradas.
          </td>
          <td>
            retorna uma promessa que retorna o nó correspondente, no entanto,
            lançará um erro se várias correspondências ou nenhuma
            correspondência for encontrada.
          </td>
        </tr>
        <tr>
          <td>Use esses métodos se você espera que o elemento</td>
          <td>
            Use esses métodos se estiver procurando confirmar a presença de um
            elemento/elementos.
          </td>
          <td>
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
