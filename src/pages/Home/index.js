import { useEffect, useState } from "react";
import api from "../../services/api";

import Header from "../../components/Header";

// URL da API: movie/now_playing?api_key=f9fef8f91d4973d6573a77bfac45823f&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing",{
        params: {
          api_key: "f9fef8f91d4973d6573a77bfac45823f",
          language: "pt-BR",
          page: 1,
        }
      })     
    }

    loadFilmes();
  }, []);

  return (
    <>
      <Header />
      <h1>BEM VINDO A HOME</h1>
    </>
  );
}

export default Home;
