//  implement cache for 10-20 most recent movie description clicks
import OMDB_API_KEY from '../../../../config';

const axios = require('axios');

function onLinkClick(value) {
  return {
    type: 'GET_MOVIE_INFO',
    payload: axios.get('https://www.omdbapi.com', {
      params: {
        apikey: OMDB_API_KEY,
        i: value,
        plot: 'full',
      }
    })
  };
}
function fromCache(cacheIndex) {
  return {
    type: 'GET_MOVIE_INFO_CACHE',
    payload: cacheIndex,
  };
}

module.exports = {
  onLinkClick,
  fromCache,
};
