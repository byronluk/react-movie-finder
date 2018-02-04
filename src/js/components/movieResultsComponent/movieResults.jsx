import React from 'react';
import { Link } from 'react-router-dom';

class MovieResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchResults = this.props.searchResults;
    return (
      <div className='search-results-container'>
        { searchResults.length === 0 ?
          <div>Enter your movie above</div> :
          searchResults.map((value, index) => (
            <div className='movie-container' key={ index }>
              <p>{ value.Title }</p>
              <Link to={ `/movie/${value.imdbID}` }>More Information</Link>
            </div>
          ))
        }
      </div>
    );
  }
}
export default MovieResults;
