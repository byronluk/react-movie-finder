import OMDB_API_KEY from '../../../../config';

const axios = require('axios');

function handleInput(value) {
  return {
    type: 'HANDLE_SEARCH_INPUT',
    payload: { value },
  };
}

function onSearch(value) {
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
}

module.exports = {
  handleInput,
  onSearch,
};

