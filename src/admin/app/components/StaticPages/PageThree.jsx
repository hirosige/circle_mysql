import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import { switchButtons } from '../../actions/header';

class PageThree extends Component {
  componentDidMount() {
    window.store.dispatch(switchButtons({ activeIndex: 2 }));
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <h1>PageThree</h1>
      </div>
    );
  }
}

PageThree.propTypes = {
  history: PropTypes.shape().isRequired
};

export default PageThree;
