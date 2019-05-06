import React, { Component } from 'react';
import './welcomeScreen.css';
import Login from '../Login';
import Register from '../Register';
import {Route, Switch} from "react-router-dom";
import Dashboard from "../Dashboard";
import ProtectedRoute from '../protected.route';
import Logout from "../Logout";
import page404 from "../page404";

class WelcomeScreen extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <ProtectedRoute path="/dashboard" component={Dashboard}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route path="*" component={page404}/>
                </Switch>
        );
    }
}

export default WelcomeScreen;