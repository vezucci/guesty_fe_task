import github from '../api/github';

export const searchUsers = (userName) => 
  async (dispatch) => {
    const response = await github.get(`/users/${userName}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
  }

export const loadRepos = (userName) => 
  async (dispatch) => {
    const response = await github.get(`/users/${userName}/repos`);
    dispatch({ type: 'LOAD_REPOS', payload: response.data });
  }
