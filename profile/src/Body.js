import React, { Component } from 'react';
import Info from './Info';
import Links from './Links';

class Body extends Component {
  render() {
    return(
      <div className='body'>
        <Info />
        <Links />
      </div>
    );
  }
}

export default Body;