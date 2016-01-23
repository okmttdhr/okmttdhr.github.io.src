/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SocialBtns from 'components/SocialBtns.react'

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
      <div className='HomePage'>
        <div className='HomePage__content'>
          <SocialBtns/>
          <p><Link className='linkToPage' to='travel'>>> traveling</Link></p>
          <p><Link className='linkToPage' to='about'>>> background</Link></p>
        </div>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
