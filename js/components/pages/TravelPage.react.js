/*
 * TravelPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import utilsMarkdown from 'utils/markdown';
import * as travelsActions from 'actions/travels'
import TravelItem from 'components/Travel/Item/index.react'
import MarkDown from 'components/MarkDown.react';

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
        <div className='TravelPage__content baseContent'>
          <MarkDown value={utilsMarkdown.whereIveBeenTo} />
          {this.props.travels.selectedPlace}
          {
            this.props.travels.places.map((place, index) => {
              return <TravelItem
                {...place}
                key={index}
                selectPlace={this.props.selectPlace} />;
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

export default connect(select, {...travelsActions})(TravelPage);
