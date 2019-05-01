import React, { Component } from 'react';
import './App.css';
import logo from './whitelogo.svg';
import WelcomeScreen from './WelcomeScreen/';



class App extends Component {
    render() {
    return (
        <div id="container">
            <div className="upperDiv">
                <img src={logo} className="logo" alt="Transaxions Logo" />
            </div>
            <div className="midDiv">
                <WelcomeScreen/>
            </div>
            <div className="bottomDiv">
                <p>Copyright 2019 Transaxions | World's Greatest Ledger App</p>
            </div>
        </div>
    );
  }
}

export default App;
