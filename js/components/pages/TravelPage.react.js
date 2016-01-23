/*
 * TravelPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import TravelItem from 'components/Travel/Item/index.react'

class TravelPage extends Component {
  render() {
    // this.props.selectTravel('phuket')
    return (
      <div className='TravelPage'>
        <div className='TravelPage__content'>
          {
            this.props.travels.places.map((place, index) => {
              return <TravelItem key={index} {...place} />;
            })
          }
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    travels: state.travels
  };
}

export default connect(select)(TravelPage);
