const INITIAL_STATE = {
  user: null,
  repos: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_USER': 
      return { ...state, user: action.payload };
    case 'LOAD_REPOS': 
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}

export default reducer;
