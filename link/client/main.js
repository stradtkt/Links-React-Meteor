import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Signup from './../imports/ui/Signup';
import Login from './../imports/ui/Login';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

import './main.html';

const routes = (
    <Router history={browserHistory}>
        <Route path="/signup" component={Signup}/>
        <Route path="/links" component={Link}/>
        <Route path="/login" component={Login}/>
        <Route path="*" component={NotFound}/>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});