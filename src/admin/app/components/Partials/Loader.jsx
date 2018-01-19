import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

import LoaderBase from './LoaderBase';

const mainLoader = {
  position: 'absolute',
  paddingTop: '60%',
  width: '100%',
  height: '50%',
  zIndex: 9000,
  backgroundColor: '#303030',
  opacity: 1,
  textAlign: 'center'
};

function Loader({ isActive }) {
  if (isActive) {
    return null;
  }

  return (
    <LoaderBase>
      <CircularProgress size={200} thickness={7} style={mainLoader} color="#FF5722" />
    </LoaderBase>
  );
}

Loader.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default Loader;
