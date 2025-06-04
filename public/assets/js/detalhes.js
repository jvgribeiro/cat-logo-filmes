const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`http://localhost:3000/filmes/${id}`)
  .then((res) => res.json())
  .then((filme) => {
    document.querySelector("#titulo").textContent = filme.titulo;
    document.querySelector("#sinopse").textContent = filme.sinopse;
    document.querySelector("#p_sinopse").textContent = filme.p_sinopse;
    document.querySelector("#elenco").textContent = filme.elenco;
    document.querySelector("#ator_1").textContent = filme.ator_1;
    document.querySelector("#p_ator_1").textContent = filme.p_ator_1;
    document.querySelector("#ator_2").textContent = filme.ator_2;
    document.querySelector("#p_ator_2").textContent = filme.p_ator_2;
    document.querySelector("#ator_3").textContent = filme.ator_3;
    document.querySelector("#p_ator_3").textContent = filme.p_ator_3;
    document.querySelector("#ator_4").textContent = filme.ator_4;
    document.querySelector("#p_ator_4").textContent = filme.p_ator_4;
    document.querySelector("#ator_5").textContent = filme.ator_5;
    document.querySelector("#p_ator_5").textContent = filme.p_ator_5;
    document.querySelector("#imagem_filme").src = filme.imagem_filme;
    document.querySelector("#imagem_filme").alt = filme.titulo;

    document.querySelector("#trailer_url").src = filme.trailer_url;

    // Galeria de imagens extras
    document.querySelector("#img_1").src = filme.img_1;
    document.querySelector("#img_2").src = filme.img_2;
    document.querySelector("#img_3").src = filme.img_3;
    document.querySelector("#img_4").src = filme.img_4;
    document.querySelector("#img_5").src = filme.img_5;
  })
  .catch((error) => console.error("Erro ao carregar o filme:", error));
