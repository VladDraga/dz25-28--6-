import axios from 'axios';

const API_KEY = 'd9e8660a4c9c5b02afdfbaff0c6df961';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMoviesByQuery(query) {
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data.results;
}