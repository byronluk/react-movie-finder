import React from 'react';
import MovieDetails from './MovieDetails';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Description</h1>
        <MovieDetails />
      </div>
    );
  }
}

export default MovieDetailContainer;
