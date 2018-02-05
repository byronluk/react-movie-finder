import { connect } from 'react-redux';

import MovieSearchForm from '../components/MovieSearchForm';
import { onMovieSearch } from '../actions';

function mapDispatchtoProps(dispatch) {
  return {
    onSubmit: (value) => {
      dispatch(onMovieSearch(value));
    }
  };
}

export default connect(null, mapDispatchtoProps)(MovieSearchForm);
