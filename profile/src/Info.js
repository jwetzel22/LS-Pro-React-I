import React, { Component } from 'react';
import Picture from './Picture';

export default class Info extends Component {
  render() {
    return(
      <div>
        <Picture src={'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/11903923_10153157160144576_5882203721411598419_n.jpg?oh=973bf33dd6d6f6781fa2c58219a6f6b9&oe=59251E88'}/>
        <p>
          Justin Wetzel
        </p>
        <p>
          25 years old
        </p>
      </div>
    );
  }
}