import {
  OPEN_RES_BAR,
  CLOSE_RES_BAR,
  ACTIVATE,
  INACTIVATE,
  INITIALIZE,
  CREATE,
  EDIT,
  DESTROY
} from '../constants/news';

const newsState = {
  news_list: [],
  isActive: false,
  committed: false,
  success: {
    message: ''
  },
  failure: {
    message: ''
  },
  succeeded: false
};

const news = (state=newsState, action) => {
  switch (action.type) {
    case OPEN_RES_BAR:
      return Object.assign({}, state, {
        committed: action.committed,
        success: action.success,
        failure: action.failure,
        succeeded: action.succeeded
      });

    case CLOSE_RES_BAR:
      return Object.assign({}, state, {
        committed: action.committed
      });

    case INACTIVATE:
      return Object.assign({}, state, {
        isActive: action.isActive
      });

    case ACTIVATE:
      return Object.assign({}, state, {
        isActive: action.isActive
      });

    case INITIALIZE:
      return Object.assign({}, state, {
        news_list: action.news,
        isActive: action.isActive
      });

    case CREATE:
      return Object.assign({}, state, {
        news_list: action.news
      });

    case EDIT:
      return Object.assign({}, state, {
        news_list: action.news
      });

    case DESTROY:
      return Object.assign({}, state, {
        news_list: action.news
      });

    default:
      return state;
  }
};

export default news;
