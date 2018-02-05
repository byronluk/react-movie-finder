import { connect } from 'react-redux';

import MovieSearchResults from '../components/MovieSearchResults';
import { onLinkClick, fromCache } from '../actions';


function mapStoreToProps(store) {
  return {
    searchResults: store.search.movieResults,
    movieCache: store.results.movieCache,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    onClick: (movieID) => {
      dispatch(onLinkClick(movieID));
    },
    fromCache: (movieIndex) => {
      dispatch(fromCache(movieIndex));
    }
  };
}

export default connect(mapStoreToProps, mapDispatchtoProps)(MovieSearchResults);
