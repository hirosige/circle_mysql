import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';
import config from 'react-global-configuration';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Router from './routes';
import configuration from './config';
import MyCustomTheme from './myCustomTheme';
import configureStore from '../store/ConfigureStore';

injectTapEventPlugin();

config.set(configuration);
window.config = config;

console.log(window.STATE_FROM_SERVER);

ReactDOM.render(
  <Provider store={configureStore(window.STATE_FROM_SERVER)}>
    <MuiThemeProvider muiTheme={getMuiTheme(MyCustomTheme)}>
      <Router />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
