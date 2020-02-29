import { combineReducers } from 'redux';
import profile from './profile';
import post from './post';
import alert from './alert';
import auth from './auth';

export default combineReducers({ alert, auth, profile, post });
