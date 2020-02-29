import axios from 'axios';
import { setAlert } from './alerts';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

// get posts

export const getPosts = id => async dispatch => {
  try {
    const res = await axios.get(`/feed/byUser/${id}`);
    console.log(res.data);
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//bone
export const addLike = (postId, userId) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'Application/json'
      }
    };
    const body = JSON.stringify({
      id: postId,
      boneId: userId
    });
    const res = await axios.put(`/feed/bone`, body, config);
    console.log(res.data);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, bones: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: 'post error' }
    });
  }
};

//un-bone
export const removeLike = (postId, userId) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'Application/json'
      }
    };
    const body = JSON.stringify({
      id: postId,
      boneId: userId
    });
    const res = await axios.put(`/feed/unbone`, body, config);
    console.log(res.data);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, bones: res.data }
    });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (id, content) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'Application/json'
      }
    };
    const body = JSON.stringify({
      publisher: id,
      content: content
    });
    console.log('hey');
    const res = await axios.post(`/feed/create`, body, config);
    console.log(res.data);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (err) {}
};

export const deletePost = id => dispatch => {};
