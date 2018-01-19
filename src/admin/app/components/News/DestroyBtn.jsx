import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DestroyBtn extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    destroy: PropTypes.func.isRequired
  };

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        onClick={() => this.props.destroy(this.props.id)}
      />
    ];

    return (
      <span>
        <RaisedButton secondary label="Destroy This" onClick={this.handleOpen} />
        <Dialog
          title="Are you sure to destroy ?"
          actions={actions}
          open={this.state.open}
        >
          Currently cannot take back this action, are you sure ?
        </Dialog>
      </span>
    );
  }
}
