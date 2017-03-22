import React, { Component } from 'react';
import Picture from './Picture';

export default class Links extends Component {
  render() {
    return(
      <div className='links'>
        <Picture src={'https://image.flaticon.com/icons/png/512/25/25231.png'} />
        <a href='https://github.com/jwetzel22/' alt={'github logo'}>
          Github
        </a>
      </div>
    );
  }
}