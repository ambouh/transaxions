import React, { Component } from 'react';
import './welcomeScreen.css';
import Login from '../Login';
import Register from '../Register';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Dashboard from "../Dashboard";

class WelcomeScreen extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
        );
    }
}

export default WelcomeScreen;