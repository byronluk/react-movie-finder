// import OMDB_API_KEY from '../../../config';

const axios = require('axios');
//  env variable
const OMDB_API_KEY = REACT_APP_OMDB_API_KEY;

export const onMovieSearch = (value) => {
  return {
    type: 'SEARCH_MOVIES',
    payload: axios.get('https://www.omdbapi.com', {
      params: {
        apikey: OMDB_API_KEY,
        s: value,
        type: 'movie',
      }
    })
  };
};

export const onLinkClick = (movieID) => {
  return {
    type: 'GET_MOVIE_INFO',
    payload: axios.get('https://www.omdbapi.com', {
      params: {
        apikey: OMDB_API_KEY,
        i: movieID,
        plot: 'full',
      }
    })
  };
};

export const fromCache = (cacheIndex) => {
  return {
    type: 'GET_MOVIE_INFO_CACHE',
    payload: cacheIndex,
  };
};

