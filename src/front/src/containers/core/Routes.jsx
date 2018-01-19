import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { joinUrl } from "Utilities/url";
import Home from 'Containers/Home'
import TerminalTemporarily from 'Containers/TerminalTemporarily'
import NotFound from 'Containers/core/NotFound'

class Routes extends Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                <Route exact path={joinUrl(match.url, '/')} component={Home}/>
                <Route path={joinUrl(match.url, '/team')}
                       component={() => (<TerminalTemporarily {...this.props} activatedMenu='team'/>)}/>
                <Route path={joinUrl(match.url, '/partners')}
                       component={() => (<TerminalTemporarily {...this.props} activatedMenu='partners'/>)}/>
                <Route path={joinUrl(match.url, '/blog')}
                       component={() => (<TerminalTemporarily {...this.props} activatedMenu='blog'/>)}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    }
}

export default Routes;