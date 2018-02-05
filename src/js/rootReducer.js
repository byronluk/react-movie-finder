import { combineReducers } from 'redux';
import searchReducer from './components/movieSearchComponent/movieSearchReducer';
import movieReducer from './components/movieResultsComponent/movieResultsReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  results: movieReducer,
});

export default rootReducer;
