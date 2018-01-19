import { connect } from 'react-redux';
import News from '../components/News';

import {
  openResBar,
  closeResBar,
  activate,
  inactivate,
  initializeAsync,
  createAsync,
  editAsync,
  destroyAsync
} from "../actions/news";

const stateToProps = state => ({
  news: state.news.news_list,
  isActive: state.news.isActive,
  committed: state.news.committed,
  success: state.news.success,
  failure: state.news.failure,
  succeeded: state.news.succeeded
});

const dispatchToProps = dispatch => ({
  openResBar: (success, failure, succeeded) => dispatch(openResBar(success, failure, succeeded)),
  closeResBar: () => dispatch(closeResBar()),
  activate: () => dispatch(activate()),
  inactivate: () => dispatch(inactivate()),
  initialize: () => dispatch(initializeAsync()),
  create: params => dispatch(createAsync(params)),
  edit: params => dispatch(editAsync(params)),
  destroy: id => dispatch(destroyAsync(id))
});

export default connect(
  stateToProps,
  dispatchToProps
)(News);
