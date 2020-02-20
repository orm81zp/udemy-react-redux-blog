import jsonPlaceholder from '../apis/jsonPlaceholder';

export const ACTIONS = {
  FETCH_POSTS: 'FETCH_POSTS'
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: ACTIONS.FETCH_POSTS,
      payload: response
    })
  }
};
