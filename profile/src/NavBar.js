import React, { Component } from 'react';
import logo from './logo.svg';

export default class NavBar extends Component {
  render() {
    return(
      <div className='navbar'>
        <h1>
          Welcome to Justin's React Page!
        </h1>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    );
  }
}