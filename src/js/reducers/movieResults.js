const defaultState = {
  currentMovie: {},
  movieCache: [],
  error: null,
};

function movieReducer(state = defaultState, action) {
  const { type, payload } = action;
  let cacheCopy = state.movieCache.slice();

  switch (type) {
    case 'GET_MOVIE_INFO_CACHE': {
      const currentMovie = cacheCopy[payload];
      return {
        ...state,
        currentMovie,
      };
    }
    case 'GET_MOVIE_INFO_FULFILLED': {
      cacheCopy = cacheCopy.concat(payload.data);
      if (cacheCopy.length > 20) {
        cacheCopy = cacheCopy.splice(0, 1);
      }
      return {
        ...state,
        currentMovie: payload.data,
        movieCache: cacheCopy,
      };
    }
    default: {
      return state;
    }
  }
}

export default movieReducer;
