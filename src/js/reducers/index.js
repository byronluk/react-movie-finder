import { combineReducers } from 'redux';
import searchReducer from './movieSearch';
import movieReducer from './movieResults';

const movieFinder = combineReducers({
  search: searchReducer,
  results: movieReducer,
});

export default movieFinder;
