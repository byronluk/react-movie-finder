const defaultState = {
  movieResults: [],
  error: null,
};

function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SEARCH_MOVIES_FULFILLED': {
      return {
        ...state,
        movieResults: payload.data.Search,
      };
    }
    default: {
      return state;
    }
  }
}

export default searchReducer;
