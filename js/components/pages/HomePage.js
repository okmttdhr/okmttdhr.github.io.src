/*
 * HomePage
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SocialBtns from 'components/SocialBtns';
import Footer from 'components/Footer';

class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
        <div className='HomePage__content baseContent'>
          <Footer/>
          <SocialBtns/>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    home: state.home
  };
}

export default connect(select)(HomePage);
