import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';

function Home({ history }) {
  return (
    <div>
      <Header history={history} />
      <h1>Home</h1>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.shape().isRequired
};

export default Home;
