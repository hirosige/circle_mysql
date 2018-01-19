import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DestroyAll extends Component {
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
        onClick={this.handleClose}
      />
    ];

    return (
      <span>
        <RaisedButton secondary label="Destroy All" onClick={this.handleOpen} />
        <Dialog
          title="Are you ready for runnaway?"
          actions={actions}
          open={this.state.open}
        >
          This is final confirmation, are you ready to run away?
        </Dialog>
      </span>
    );
  }
}
