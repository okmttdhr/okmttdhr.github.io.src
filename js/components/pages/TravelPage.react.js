/*
 * TravelPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as travelsActions from 'actions/travels'
import TravelItem from 'components/Travel/Item/index.react'

class TravelPage extends Component {
  static propTypes = {
    travels: React.PropTypes.object.isRequired,
    selectPlace: React.PropTypes.func.isRequired,
  };

  constructor () {
    super()
  }

  render() {
    return (
      <div className='TravelPage'>
        <div className='TravelPage__content'>
          <p>
            {'I\'ve been to Australia, Brazil, Okinawa, Finland, Bali Island, Taiwan, Phuket, and Bangkok.'}
          </p>
          {this.props.travels.selectedPlace}
          {
            this.props.travels.places.map((place, index) => {
              return <TravelItem
                {...place}
                key={index}
                selectPlace={this.props.selectPlace} />;
            })
          }
          <Link className='linkToPage' to='/'>>> home</Link>
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

export default connect(select, {...travelsActions})(TravelPage);
