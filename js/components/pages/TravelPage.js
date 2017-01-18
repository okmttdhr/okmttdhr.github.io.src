/*
 * TravelPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
// import PhotoSwipe from 'photoswipe';
import utilsMarkdown from 'utils/markdown';
import * as travelsActions from 'actions/travels';
// import TravelItem from 'components/Travel/Item';
import MarkDown from 'components/MarkDown';

class TravelPage extends Component {
  static propTypes = {
    travels: React.PropTypes.object.isRequired,
    selectPlace: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
  }

  render() {
    const pictures = [];
    this.props.travels.places.reverse().map((place) => {
      Array.prototype.push.apply(pictures, place.pictures);
    });
    return (
      <div className='TravelPage'>
        <div className='TravelPage__content'>
          <MarkDown value={utilsMarkdown.whereIveBeenTo} />
          <iframe className='TravelPage__MyMap' src="https://www.google.com/maps/d/u/0/embed?mid=12loqgLDcjQBqe5VMYi_M0fu9chw"></iframe>
          {
            pictures.map((pic, index) => {
              return (<div key={index}>
                <a href={pic.link} target='_blank' />
                <img src={require('images/' + pic.src)} />
              </div>);
            })
          }
          {
            // this.props.travels.places[1].pictures.map((pic, index) => {
            //   return (<a href={pic.link} target='_blank'><img src={require('images/' + pic.src)} /></a>);
            // })
          }
          {/* this.props.travels.selectedPlace */}
          {
            // this.props.travels.places.map((place, index) => {
            //   return <TravelItem
            //     {...place}
            //     key={index}
            //     selectPlace={this.props.selectPlace} />;
            // })
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
