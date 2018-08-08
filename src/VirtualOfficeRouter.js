import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import Task_Dashboard from './pages/Task_Dashboard/Task_Dashboard';
import ScrollToTop from './ScrollToTop'

export default class VirtualOfficeRouter extends Component {
    render() {
      return (
        <div className="VirtualOfficeRouter">
            <Router>
            <ScrollToTop>
                <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/task-dashboard" component={Task_Dashboard} />
                </Switch>
                </ScrollToTop>
            </Router>
        </div>
      );
    }
}