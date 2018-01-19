import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { authenticateAsync } from '../../actions/auth';
import LoginCard from '../../components/Sessions/LoginCard';
import LoginBase from '../../components/Sessions/LoginBase';
import LoginForm from '../../components/Sessions/LoginForm';

const Colors = require('material-ui/styles/colors');

const style = {
  width: '35%',
  height: '400px',
  margin: '50px',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  background: Colors.cyan900
};

// const styleBottom = {
//   position: 'absolute',
//   width: '27%',
//   height: '20%',
//   margin: '50px',
//   display: 'flex',
//   alignContent: 'center',
//   justifyContent: 'center',
//   alignItems: 'flex-end',
//   background: Colors.teal900,
//   right: '2.5%',
//   bottom: '15%'
// };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      ...window.store.getState()
    };
    this.store = window.store;
    this.email = '';
    this.password = '';
    this.onLogin = this.onLogin.bind(this);
    this.onOneClickLogin = this.onOneClickLogin.bind(this);
    this.isUseAuthenticated = this.isUseAuthenticated.bind(this);
  }

  componentWillMount() {
    this.isUseAuthenticated();
  }

  componentDidMount() {
    this.isUseAuthenticated();
  }

  onOneClickLogin() {
    this.store.dispatch(authenticateAsync());
  }

  onLogin() {
    console.log('onLogin');
    const email = this.email.getInputNode().value;
    const password = this.password.getInputNode().value;
    if (email !== '' && password !== '') {
      this.store.dispatch(authenticateAsync({
        email,
        password
      }));
      this.setState({ isAuthenticated: true });
    }
  }

  isUseAuthenticated() {
    if (localStorage.getItem('_accessToken') && localStorage.getItem('_user')) {
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    this.state.auth = {
      ...window.store.getState().auth
    };

    return (
      this.state.isAuthenticated ? (
        <Redirect to="/admin" />
      ) : (
        <div>
          <div>
            <LoginBase>
              <LoginCard />
              <Card style={style} zDepth={4}>
                <LoginForm>
                  <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    ref={(ref) => { this.email = ref; }}
                  />
                  <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                    ref={(ref) => { this.password = ref; }}
                  /><br />
                  <RaisedButton primary label="Login" onClick={this.onLogin} style={{ marginBottom: 10 }} />
                  <RaisedButton primary label="One Click Login" onClick={this.onOneClickLogin} style={{ marginBottom: 10 }} />
                  <RaisedButton secondary label="Sign Up" style={{ marginBottom: 30 }} />
                </LoginForm>
              </Card>
            </LoginBase>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  sessionId: state.login.login.sessionId,
  message: state.login.login.message
});

export default withRouter(connect(mapStateToProps)(Login));
