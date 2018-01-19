import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class EditBtn extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    edit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.description = '';
  }

  state = {
    open: false,
    title: '',
    description: ''
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    switch (e.target.id) {
      case 'title':
        this.setState({ title: e.target.value });
        return true;

      case 'description':
        this.setState({ description: e.target.value });
        return true;

      default:
        return false;
    }
  };

  handleSubmit = () => {
    this.setState({ open: false });

    this.props.edit({
      id: this.props.id,
      title: this.state.title,
      description: this.state.description
    });

    this.setState({
      title: '',
      description: ''
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onClick={this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary
        keyboardFocused
        onClick={this.handleSubmit}
      />
    ];

    return (
      <span>
        <RaisedButton primary label="Edit This" onClick={this.handleOpen} />
        <Dialog
          title="Edit News"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>Please fill in blank.</p>

          <div>
            <TextField
              id="title"
              floatingLabelText="Title"
              defaultValue={this.props.title}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              id="description"
              floatingLabelText="Description"
              defaultValue={this.props.description}
              onChange={this.handleChange}
            />
          </div>

        </Dialog>
      </span>
    );
  }
}
