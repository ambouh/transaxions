import React, { Component } from 'react';
import './welcomeScreen.css';
import Login from '../Login';
import Register from '../Register';
import {Route, Switch} from "react-router-dom";
import Dashboard from "../Dashboard";
import ProtectedRoute from '../protected.route';

class WelcomeScreen extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <ProtectedRoute path="/dashboard" component={Dashboard}/>
                </Switch>
        );
    }
}

export default WelcomeScreen;