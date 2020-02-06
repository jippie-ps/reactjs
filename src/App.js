import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React on Openshift</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload - edited by Wendy Chong.
      This is prepared for Pipeline Demos
        </p>
      </div>
    );
  }
}

export default App;
