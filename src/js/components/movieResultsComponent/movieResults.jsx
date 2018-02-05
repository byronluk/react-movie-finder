import React from 'react';
import { Link } from 'react-router-dom';
import { onLinkClick, fromCache } from './movieResultsActions';

function checkCache(id, cache) {
  const inCache = cache.findIndex(cacheItem => id === cacheItem.imdbID);
  return inCache;
}

class MovieResults extends React.Component {
  constructor(props) {
    super(props);

    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(event) {
    const movieID = event.target.name;
    const { dispatch } = this.props;
    const cacheIndex = checkCache(movieID, this.props.movieCache);

    if (cacheIndex >= 0) {
      dispatch(fromCache(cacheIndex));
    } else {
      dispatch(onLinkClick(movieID));
    }
  }

  render() {
    const searchResults = this.props.searchResults;
    return (
      <div className='search-results-container'>
        { searchResults.length === 0 ?
          <div>Enter your movie above</div> :
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
                onClick={ this.onLinkClick }
                to={ `/movie/${value.imdbID}` }
                name={ value.imdbID }
                className='more-info'
              >
                More Information
              </Link>
              <hr />
            </div>
          ))
        }
      </div>
    );
  }
}
export default MovieResults;
