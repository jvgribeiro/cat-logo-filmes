const filmes = [
  { nome: "A libertação", ano: "2024", quantidade: 1 },
  { nome: "Terrifier 3", ano: "2023", quantidade: 1 },
  { nome: "Demolidor Renascido", ano: "2025", quantidade: 1 },
  { nome: "Elementos", ano: "2023", quantidade: 1 },
  { nome: "Ricos de amor 2", ano: "2023", quantidade: 1 },
  { nome: "Lobisomem", ano: "2025", quantidade: 1 },
  { nome: "Oppenheimer", ano: "2023", quantidade: 1 },
  { nome: "Smile 2", ano: "2024", quantidade: 1 },
  { nome: "A primeira profecia", ano: "2024", quantidade: 1 },
  { nome: "Homem aranha: Através do Aranhaverso", ano: "2023", quantidade: 1 },
  { nome: "Anora", ano: "2024", quantidade: 1 },
];

// ------------------------------------------------
// Dispara a montagem do gráfico após o carregamento da página
window.onload = () => {
  createPieChart(filmes);
};

function createPieChart(data) {
  // ------------------------------------------------
  // Vamos preparar os dados dos lançamentos para a exibição no gráfico.
  // Para isso, precisamos agrupar os lançamentos por ano

  // Primeiro vamos criar um array a lista de ano de forma única.
  // Para isso, vamos utilizar uma estrutura do JavaScript
  // denominada Set (Conjunto). Ao criar o Set a partir de um array,
  // ele tira as duplicidades.
  const ano = Array.from(new Set(data.map((item) => item.ano)));

  // Agora vamos consolidar todos os filmes por ano.
  // Para isso, vamos passar em cada ano e totalizar os lançamentos
  const quantidadePorano = ano.map((ano) => {
    const quantidadeTotal = data
      .filter((item) => item.ano === ano)
      .reduce((acc, curr) => acc + curr.quantidade, 0);
    return quantidadeTotal;
  });

  // Obtem o elemento DIV da página que vai receber o gráfico
  const ctx = document.getElementById("divPieChart");

  // Cria o objeto do gráfico passando os parâmetros
  const divPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ano,
      datasets: [
        {
          data: quantidadePorano,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: ["rgba(255, 255, 2555, 1)"],
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
    },
  });
}
