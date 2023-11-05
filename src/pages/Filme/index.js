/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import Header from "../../components/Header";
import No404 from "../No404";

// URL da API movie/id?api_key=f9fef8f91d4973d6573a77bfac45823f&language=pt-BR

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState([true]);
  const [found, setFound] = useState([true]);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "f9fef8f91d4973d6573a77bfac45823f",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setFound(false);
        });
    }
    loadFilme();

    return () => {
      console.log("Componente Desmontado");
    };
  }, [id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@filmez");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const estavaSalvo = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (estavaSalvo) {
      alert(`ESTE FILME JÁ ESTÁ LISTADO!`);
    } else {
      filmesSalvos.push(filme);
      localStorage.setItem("@filmez", JSON.stringify(filmesSalvos));
      alert(`FILME SALVO COM SUCESSO!`);
    }
  }

  if (!found) {
    return (
      <>
        <No404 />
      </>
    );
  } else if (loading) {
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
      <div className="film-container">
      
        <div className="trailer-image">
          <img
            className="film-info-poster"
            src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}
            alt={filme.title}
          />
          <a href={`https://youtube.com/results?search_query=trailer+${filme.title}`}
              target="_blank"
              rel="noopener noreferrer external"
            >
          <img className="play" src="/img/play-button-svgrepo-com.svg" />
          </a>
        </div>
        
        <ul className="filme-info">
          <li>
            <h1 className="top-title">{filme.title}</h1>
          </li>
          <li>
            <ul className="row">
              <li className="imdb">
                <h3>imdb</h3>
                <h4>{parseFloat(filme.vote_average).toFixed(1)}</h4>
              </li>
              <li className="genres">
                {filme.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < filme.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
            </ul>
          </li>
          <li className="synopsis">
            <h4>sinopse</h4>
            <p>{filme.overview ? filme.overview : `Sinopse indisponível :(`}</p>
          </li>
          <li className="area-btns">
            <button className="btn" onClick={salvarFilme}>
              salvar
            </button>           
          </li>
        </ul>
      </div>
    </>
  );
}

export default Filme;
