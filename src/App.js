import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
        <Login errorMessage="Too much tentatives" buttonDisabled={false}/>
      </div>
    );
  }
}

export default App;
