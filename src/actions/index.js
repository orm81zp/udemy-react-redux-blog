import jsonPlaceholder from '../apis/jsonPlaceholder';

export const ACTIONS = {
  FETCH_POSTS: 'FETCH_POSTS'
};

export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: ACTIONS.FETCH_POSTS,
    payload: response
  }
};
