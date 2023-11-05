import { useEffect, useState } from "react";
import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currentPageInput, setCurrentPageInput] = useState(1);

  const loadFilmes = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "f9fef8f91d4973d6573a77bfac45823f",
          language: "pt-BR",
          page: pageNumber,
        },
      });
      setFilmes(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  const nextPage = () => {
    if (page < 100) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleInputChange = (e) => {
    setCurrentPageInput(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      const pageToGo = parseInt(currentPageInput, 10);
      if (!isNaN(pageToGo) && pageToGo <= 100) {
        setPage(pageToGo);
      }
    }
  };

  useEffect(() => {
    loadFilmes(page);
    setCurrentPageInput(page); // Atualiza o campo de entrada com o valor da página atual
  }, [page]);

  if (loading) {
    return (
      <div className="loading">
        <img src="/img/loading.svg" alt="loading" />
        <h3>Carregando</h3>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <ul className="lista-filmes">
          {filmes.map((filme) => {
            return (
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
                </div>
                <span className="poster-imdb">
                  IMDb - {parseFloat(filme.vote_average).toFixed(1)} / 10
                </span>
              </li>
            );
          })}
        </ul>
        <div className="pagination">
          <button
            className="page-button"
            onClick={prevPage}
            disabled={page === 1}
          >
            Página Anterior
          </button>
          <button className="page-button" onClick={nextPage}
          disabled={page > 99}
          >
            Próxima Página
          </button>
          <div className="page-input">
            <input
              type="number"
              min="1"
              max="100"
              value={currentPageInput}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyPress}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
