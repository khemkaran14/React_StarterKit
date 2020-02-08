import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import logo from "./assets/logo-anim.gif";

class App extends Component{
  render(){
    return(
      <div className="App">
        <img src={logo} />
        <h1>React Boilerplate</h1>
        <p>Most simple react starter kit with compatible dependencies and configurations.</p>
      </div>
    );
  }
}

export default hot(module)(App);