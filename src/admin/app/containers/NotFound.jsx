import { connect } from 'react-redux';
import NotFound from '../components/Sessions/NotFound';

const mapStateToProps = state => ({
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
