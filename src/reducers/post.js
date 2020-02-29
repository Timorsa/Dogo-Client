import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_POST
} from '../actions/types';

const initialState = {
  feed: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        feed: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        feed: state.feed.map(post =>
          post._id === payload.postId ? { ...post, bones: payload.bones } : post
        ),
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        feed: [...state.feed, payload],
        loading: false
      };
    default:
      return state;
  }
}
