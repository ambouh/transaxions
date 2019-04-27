import React, { Component} from 'react';
import './summary.css';
import AllTransactions from "../AllTransactions";
import {Link, Switch, Route} from 'react-router-dom';

class Summary extends Component {
    title = "Dashboard";
    render() {
        return (
            <div className="templateDiv">
                <h1 className={"templateTitle"}>{this.title}</h1>
                <p className={"templateText"}>This is the {this.title} template</p>
            </div>
        );
    }
}

export default Summary;