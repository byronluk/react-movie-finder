const defaultState = {
  input: '',
  movieResults: [],
  error: null,
};

function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'HANDLE_SEARCH_INPUT': {
      return {
        ...state,
        input: payload.value,
      };
    }
    case 'SEARCH_MOVIES_PENDING': {
      return {
        ...state,
        input: '',
      };
    }
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
