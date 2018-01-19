import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from 'history';
import PageTwo from '../components/StaticPages/PageTwo';
import PageThree from '../components/StaticPages/PageThree';
import Home from '../components/StaticPages/Home';
import NotFound from '../components/Sessions/NotFound';
import News from '../containers/News';
import App from '../components/App';
import Auth from '../containers/Auth';
import Login from '../components/Sessions/Login';

const urlPrefix = '/admin';

const Routes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/admin/login" component={Login} />
        <Auth>
          <Switch>
            <Route exact path={`${urlPrefix}`} component={Home} />
            <Route exact path={`${urlPrefix}/news`} component={News} />
            <Route exact path={`${urlPrefix}/users`} component={PageTwo} />
            <Route exact path={`${urlPrefix}/employees`} component={PageThree} />
            <Route component={NotFound} />
          </Switch>
        </Auth>
      </Switch>
    </App>
  </Router>
);

export default Routes;
