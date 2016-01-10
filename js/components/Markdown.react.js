/*
 * MarkDown
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component } from 'react';
import marked from 'marked';

export default class MarkDown extends Component {
  componentDidMount() {
    document.getElementsByClassName('MarkDown')[0].innerHTML = marked(this.props.value);
  }

  render() {
    return (
      <div className='MarkDown'/>
    );
  }
}
