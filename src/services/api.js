import axios from "axios";

// https://api.themoviedb.org/3/movie/now_playing?api_key=f9fef8f91d4973d6573a77bfac45823f&language=pt-BR
// Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=f9fef8f91d4973d6573a77bfac45823f&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
