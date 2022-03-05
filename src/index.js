import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './components/Login/Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Give from './components/Give/Give';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact component={Map} path="/" />
            <Route component={Give} path="/give" />
        </Switch>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
