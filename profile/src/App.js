import React, { Component } from 'react';
import NavBar from './NavBar';
import Body from './Body';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
