import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ movieInfo }) => {
  return (
    <div className='movie-detail-container'>
      <Link
        to='/'
        name='return-link'
        className='back-link'
      >
        Go Back
      </Link>
      <h1 className='movie-title page-title'>{ movieInfo.Title }</h1>
      <div className='contents-container'>
        <img
          src={ movieInfo.Poster }
          alt={ `${movieInfo.Title} Poster` }
          className='movie-detail-poster'
        />
        <div className='description-container'>
          <p className='container-label'>Movie Details</p>
          <p className='movie-tag'>{ movieInfo.Released }</p>
          <p className='movie-tag'>{ movieInfo.Runtime }</p>
          <p className='movie-tag'>{ movieInfo.Genre }</p>
          <p className='movie-plot'>{ movieInfo.Plot }</p>
          <hr />
          <div className='awards-container'>
            <p className='movie-label'><span>Awards: </span>{ movieInfo.Awards }</p>
            <p className='movie-label'><span>Metascore: </span>{ movieInfo.Metascore }/100</p>
            <p className='movie-label'><span>IMDB: </span>{ movieInfo.imdbRating }/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
