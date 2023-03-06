import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '577a2e8b3e81548619368a0754bca345';
axios.defaults.baseURL = BASE_URL;

export async function dataLoad() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
      // page,
    },
  });
  return response.data.results;
};

export async function getSearchFilms(query) {
  const response = await axios('search/movie', {
    params: {
      api_key: KEY,
      // page,
      query,
    },
  });
  return response.data.results;
};

export async function getDetails(id) {
  const response = await axios(`/movie/${id}`, {
    params: {
      api_key: KEY,
       },
  });
   return response.data;
};

export async function getReviews() {
  const response = await axios(`/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
      id,
       },
  });
    return response.data.data.results;
};

