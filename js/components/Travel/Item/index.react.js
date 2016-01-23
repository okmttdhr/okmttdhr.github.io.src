import React, { Component } from 'react';

export default class TravelItem extends Component {
  static propTypes = {
    selectPlace: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className='TravelItem' onClick={() => this.props.selectPlace(this.props.name)}>
        {this.props.name}
        {this.props.start_at}
      </div>
    );
  }
}
