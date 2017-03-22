import React, { Component } from 'react';
import Info from './Info';
import Links from './Links';

class Body extends Component {
  render() {
    return(
      <div>
        <Info />
        <Links />
      </div>
    );
  }
}

export default Body;