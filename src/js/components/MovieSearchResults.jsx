import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//  checks cache, returns onclick prop if movie is n/a or fromcache prop if movie is available
function checkCache(id, cache, onClick, fromCache) {
  const cacheIndex = cache.findIndex(cacheItem => id === cacheItem.imdbID);
  if (cacheIndex >= 0) {
    return fromCache(cacheIndex);
  }
  return onClick(id);
}

const MovieSearchResults = ({ searchResults, movieCache, onClick, fromCache }) => {
  return (
    <div className='search-results-container'>
      { searchResults.length !== 0 &&
        searchResults.map((value, index) => (
          <div className='movie-container' key={ index }>
            <img
              src={ value.Poster }
              alt={ `${value.Title} Poster` }
              className='movie-poster'
            />
            <h2 className='movie-title'>{ value.Title }</h2>
            <p className='movie-year'>Released { value.Year }</p>
            <Link
              onClick={ () => checkCache(value.imdbID, movieCache, onClick, fromCache) }
              to={ `/movie/${value.imdbID}` }
              className='more-info'
            >
              More Information
            </Link>
          </div>
        ))
      }
    </div>
  );
};

MovieSearchResults.propTypes = {
  searchResults: PropTypes.array,
  movieCache: PropTypes.array,
  onClick: PropTypes.func,
  fromCache: PropTypes.func,
};

export default MovieSearchResults;
