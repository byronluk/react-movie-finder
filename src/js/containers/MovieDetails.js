import { connect } from 'react-redux';
import MovieDetails from '../components/MovieDetails';

function mapStoreToProps(store) {
  return {
    movieInfo: store.results.currentMovie,
  };
}

export default connect(mapStoreToProps)(MovieDetails);
