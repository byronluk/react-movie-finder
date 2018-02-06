import React from 'react';
import MovieDetails from './MovieDetails';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MovieDetails />
      </div>
    );
  }
}

export default MovieDetailContainer;
