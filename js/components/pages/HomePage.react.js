/*
 * HomePage
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SocialBtns from 'components/SocialBtns.react'

class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
        <div className='HomePage__content baseContent'>
          <SocialBtns/>
        </div>
      </div>
    );
  }
}


// Which props do we want to inject, given the global state?
function select(state) {
  return {
    home: state.home
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
