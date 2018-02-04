import { combineReducers } from 'redux';
import searchReducer from './components/movieSearchComponent/movieSearchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
