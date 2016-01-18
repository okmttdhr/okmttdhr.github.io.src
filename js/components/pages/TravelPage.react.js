/*
 * TravelPage
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TravelPage extends Component {
  render() {
    return (
      <div className='TravelPage'>
        <div className='TravelPage__content'>
          travel
          <Link className='linkToPage' to='/'>>> home</Link>
        </div>
      </div>
    );
  }
}
