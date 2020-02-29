import axios from 'axios';
import { setAlert } from './alerts';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

// LOAD USER
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// sign-up user

export const signup = newUser => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'Application/json'
    }
  };

  const body = JSON.stringify(newUser);

  try {
    const res = await axios.post('/user/signup', body, config);

    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'sign-in')));
    }
    dispatch({
      type: SIGN_UP_FAIL
    });
  }
};

// sign-in  user

export const signin = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'Application/json'
    }
  };

  const body = JSON.stringify({
    email,
    password
  });

  try {
    const res = await axios.post('/user/signin', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    console.log(res);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'sign-up')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// LOGOUT

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
