import React from 'react';
import { Link } from 'react-router-dom';

class MovieDetails extends React.Component {
  render() {
    const { movieInfo } = this.props;

    return (
      <div>
        <Link
          to='/'
          name='return-link'
          className='back-link'
        >
          Go Back
        </Link>
        <img src={ movieInfo.Poster } alt={ `${movieInfo.Title} Poster` } />
        <div className='description-container'>
          <p className='container-label'>Movie Details</p>
          <h2 className='movie-title'>{ movieInfo.Title }</h2>
          <p className='movie-label'>{ movieInfo.Released }</p>
          <p className='movie-label'>{ movieInfo.Runtime }</p>
          <p className='movie-label'>{ movieInfo.Genre }</p>
          <p className='movie-plot'>{ movieInfo.Plot }</p>
          <p className='movie-label'>{ `Awards: ${movieInfo.Awards}` }</p>
          <p className='movie-label'>{ `Metascore: ${movieInfo.Metascore}/100` }</p>
          <p className='movie-label'>{ `IMDB: ${movieInfo.imdbRating}/10` }</p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
