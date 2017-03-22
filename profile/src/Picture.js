import React, { Component } from 'react';
import './Picture.css';

export default class Picture extends Component {
	render() {
		return(
  		<img src={ this.props.src }>
      </img>
    );
	}
}