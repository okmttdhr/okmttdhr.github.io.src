import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer baseContent'>
        <p><Link className='linkToPage' to='/'>>> home</Link></p>
        <p><Link className='linkToPage' to='travel'>>> traveling</Link></p>
        <p><Link className='linkToPage' to='about'>>> background</Link></p>
      </div>
    );
  }
}
