import React from 'react';

import MovieSearchForm from '../components/movieSearchComponent';
import MovieResults from '../components/movieResultsComponent';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Finder</h1>
        <MovieSearchForm />
        <MovieResults />
      </div>
    );
  }
}

export default MovieSearchContainer;
