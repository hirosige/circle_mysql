import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import { switchButtons } from '../../actions/header';

class PageTwo extends Component {
  componentDidMount() {
    window.store.dispatch(switchButtons({ activeIndex: 1 }));
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <h1>PageTwo</h1>
      </div>
    );
  }
}

PageTwo.propTypes = {
  history: PropTypes.shape().isRequired
};

export default PageTwo;
