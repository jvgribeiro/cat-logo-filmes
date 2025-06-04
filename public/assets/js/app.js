fetch("/db/db.json")
  .then((response) => response.json())
  .then((data) => {
    const id = new URLSearchParams(window.location.search).get("id");
    const filme = data.filmes.find((item) => item.id == id);

    if (filme) {
      document.getElementById("imagem_filme").src = filme.imagem_filme;
      document.getElementById("titulo").innerHTML = filme.titulo;
      document.getElementById("p_sinopse").innerHTML = filme.p_sinopse;
      document.getElementById("elenco").innerHTML = filme.elenco;
      document.getElementById("ator_1").innerHTML = filme.ator_1;
      document.getElementById("p_ator_1").innerHTML = filme.p_ator_1;
      document.getElementById("ator_2").innerHTML = filme.ator_2;
      document.getElementById("p_ator_2").innerHTML = filme.p_ator_2;
      document.getElementById("ator_3").innerHTML = filme.ator_3;
      document.getElementById("p_ator_3").innerHTML = filme.p_ator_3;
      document.getElementById("ator_4").innerHTML = filme.ator_4;
      document.getElementById("p_ator_4").innerHTML = filme.p_ator_4;
      document.getElementById("ator_5").innerHTML = filme.ator_5;
      document.getElementById("p_ator_5").innerHTML = filme.p_ator_5;
      document.getElementById("p_ator_5").innerHTML = filme.p_ator_5;
      document.getElementById("trailer_url").src = filme.trailer_url;

      document.getElementById("img_1").src = filme.img_1;
      document.getElementById("img_2").src = filme.img_2;
      document.getElementById("img_3").src = filme.img_3;
      document.getElementById("img_4").src = filme.img_4;
      document.getElementById("img_5").src = filme.img_5;
    } else {
      console.log("Receita não encontrada");
    }
  })
  .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
