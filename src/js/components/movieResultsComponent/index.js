import { connect } from 'react-redux';
import movieResults from './movieResults';

function mapStoreToProps(store) {
  return {
    searchResults: store.search.movieResults,
  };
}

export default connect(mapStoreToProps)(movieResults);
