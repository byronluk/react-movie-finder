import React from 'react';

import MovieResults from './MovieResults';
import MovieSearch from './MovieSearch';

class MovieSearchContainer extends React.Component {
  render() {
    return (
      <div>
        <h1 className='page-title'>Movie Finder</h1>
        <MovieSearch />
        <MovieResults />
      </div>
    );
  }
}

export default MovieSearchContainer;
