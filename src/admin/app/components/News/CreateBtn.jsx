import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class CreateBtn extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.description = '';
  }

  state = {
    open: false,
    title: '',
    description: '',
    errors: {
      title: '',
      description: ''
    }
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
        if (e.target.value !== '') this.setState({ errors: { title: 'Title is required' } });
        else this.setState({ errors: { title: '' } });
        return true;

      case 'description':
        this.setState({ description: e.target.value });
        if (e.target.value !== '') this.setState({ errors: { description: 'Description is required' } });
        else this.setState({ errors: { description: '' } });
        return true;

      default:
        return false;
    }
  };

  handleSubmit = () => {
    this.setState({ open: false });

    this.props.create({
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
        <RaisedButton primary label="Create News" onClick={this.handleOpen} />
        <Dialog
          title="Create News"
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
              defaultValue={this.state.title}
              onChange={this.handleChange}
              errorText={this.state.errors.title}
            />
            <br />
            <TextField
              id="description"
              hintText="Please input description"
              floatingLabelText="Description"
              multiLine
              rows={4}
              defaultValue={this.state.description}
              onChange={this.handleChange}
              style={{
                width: '50%'
              }}
              errorText={this.state.errors.description}
            />
          </div>

        </Dialog>
      </span>
    );
  }
}
