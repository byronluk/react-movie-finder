import { connect } from 'react-redux';
import movieSearchForm from './movieSearchForm';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
  };
}

export default connect(mapStoreToProps)(movieSearchForm);
