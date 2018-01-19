import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

const bodyStyle = {
  backgroundColor: '#0097a7',
  textColor: '#fff'
};

const style = {
  zIndex: 10000
};

function Success({ committed, closeResBar, success }) {
  return (
    <div>
      <Snackbar
        open={committed}
        message={success.message}
        autoHideDuration={success.duration}
        onRequestClose={closeResBar}
        bodyStyle={bodyStyle}
        style={style}
      />
    </div>
  );
}

Success.propTypes = {
  committed: PropTypes.bool.isRequired,
  closeResBar: PropTypes.func.isRequired,
  success: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

export default Success;
