import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Favoritos(){
const [filmes, setFilmes] = useState([]);

useEffect(()=>{
  const favoritos = localStorage.getItem("@filmez");
  setFilmes(JSON.parse(favoritos) || [])
},[])

  return(
    <>
    <Header/>
    <div className="container">
      <ul className="lista-filmes">
        {filmes.map((filme)=>{
          return(            
             <li key={filme.id}>
              <div className="film">
              <h2>{filme.title}</h2>             
             <img className="film-poster" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title}/>
             <a className="large-btn" href={`/filme/${filme.id}`}>Acessar</a>
             </div>
             <span className="poster-imdb">imdb - {parseFloat(filme.vote_average).toFixed(1)} / 10</span>
             </li>       
          )
        })}
      </ul>
    </div>
    <Footer/>
    </>
  )
}

export default Favoritos;