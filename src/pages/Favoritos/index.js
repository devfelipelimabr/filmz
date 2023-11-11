import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const favoritos = localStorage.getItem("@filmez");
    setFilmes(JSON.parse(favoritos) || []);
  }, []);

  const handleRemoverFilme = (id) => {
    // Exibe uma janela de confirmação
    const confirmacao = window.confirm("Tem certeza que deseja remover este filme?");
    if (!confirmacao) {
      return; // Se o usuário cancelar, não faz nada
    }

    // Filtra os filmes removendo o filme com o ID correspondente
    const novosFilmes = filmes.filter((filme) => filme.id !== id);
    setFilmes(novosFilmes);
    // Atualiza o localStorage com os novos filmes
    localStorage.setItem("@filmez", JSON.stringify(novosFilmes));
  };

  return (
    <>
      <Header />
      <div className="container">
        <ul className="lista-filmes">
          {filmes.map((filme) => (
            <li key={filme.id}>
              <div className="film">
                <h2>{filme.title}</h2>
                <img
                  className="film-poster"
                  src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                  alt={filme.title}
                />
                <a className="large-btn" href={`/filme/${filme.id}`}>
                  Acessar
                </a>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoverFilme(filme.id)}
                >
                  Remover
                </button>
              </div>
              <span className="poster-imdb">
                imdb - {parseFloat(filme.vote_average).toFixed(1)} / 10
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Favoritos;
