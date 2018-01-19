import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

const style = {
  backgroundColor: '#ff4081',
  textColor: '#fff'
};

function Failure({ committed, closeResBar, failure }) {
  return (
    <div>
      <Snackbar
        open={committed}
        message={failure.message}
        autoHideDuration={failure.duration}
        onRequestClose={closeResBar}
        bodyStyle={style}
      />
    </div>
  );
}

Failure.propTypes = {
  committed: PropTypes.bool.isRequired,
  closeResBar: PropTypes.func.isRequired,
  failure: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

export default Failure;
