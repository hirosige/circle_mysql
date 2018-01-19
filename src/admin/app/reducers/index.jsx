import { combineReducers } from 'redux';
import user from './user';
import news from './news';
import header from './header';
import login from './loginReducer';
import auth from './auth';

export default combineReducers({
  user,
  news,
  header,
  login,
  auth
});
