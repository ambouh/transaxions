import React, { Component } from 'react';
import './register.css';

class Register extends Component {
    title = "register";
    render() {
        return (
            <div className="templateDiv">
                <h1 className={"templateTitle"}>{this.title}</h1>
                <p className={"templateText"}>This is the {this.title} template</p>
            </div>
        );
    }
}

export default Register;