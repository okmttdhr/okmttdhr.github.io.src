import React, { Component } from 'react';

export default class TravelItem extends Component {
  render() {
    return (
      <div className='TravelItem'>
        {this.props.name}
        {this.props.start_at}
      </div>
    );
  }
}
