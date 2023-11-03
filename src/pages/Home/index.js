import { useEffect, useState } from "react";
import api from "../../services/api";

import Header from "../../components/Header";

// URL da API: movie/now_playing?api_key=f9fef8f91d4973d6573a77bfac45823f&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing",{
        params: {
          api_key: "f9fef8f91d4973d6573a77bfac45823f",
          language: "pt-BR",
          page: 1,
        }
      })  
      setFilmes(response.data.results.slice(0,10))
      setLoading(false)
    }

    loadFilmes();
  }, []);

  if(loading){
    return(
      <div className="loading">        
       <img src="img/loading.svg" alt="loading"/>
       <h3>Carregando</h3>
      </div>
    )
  }
  
  return (
    <>
    <Header/>
    <div className="container">
      <ul className="lista-filmes">
        {filmes.map((filme)=>{
          return(            
             <li key={filme.id}><h3>{filme.title}</h3>
             <img className="film-poster" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title}/>
             <a href={`/filme/${filme.id}`}>Acessar</a>
             </li>            
          )
        })}
      </ul>
    </div>
    </>
  );
}

export default Home;
