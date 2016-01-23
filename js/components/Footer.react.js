import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='Footer baseContent'>
        <p><Link className='linkToPage' to='/'>>> home</Link></p>
        <p><Link className='linkToPage' to='travel'>>> traveling</Link></p>
        <p><Link className='linkToPage' to='about'>>> background</Link></p>
      </div>
    );
  }
}

function select(state) {
  return {
    router: state.router
  };
}

export default connect(select)(Footer);
