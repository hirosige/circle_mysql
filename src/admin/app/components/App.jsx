import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import TopHeader from '../components/Partials/TopHeader';
import BottomFooter from '../components/Partials/BottomFooter';

const App = ({ children }) => (
  <div>
    <TopHeader>{window.config.get('siteName')}</TopHeader>
    <Route children={children} />
    <BottomFooter>{window.config.get('copyRight')}</BottomFooter>
  </div>
);

App.propTypes = {
  children: PropTypes.shape().isRequired
};

export default App;
