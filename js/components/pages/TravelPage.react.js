/*
 * TravelPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import utilsMarkdown from 'utils/markdown';
import * as travelsActions from 'actions/travels'
import TravelItem from 'components/Travel/Item.react'
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
    let pictures = []
    this.props.travels.places.map((place, index) => {
      Array.prototype.push.apply(pictures, place.pictures);
    })
    return (
      <div className='TravelPage'>
        <div className='TravelPage__content baseContent'>
          <img src='images/thailand/koLanta/12547229_727751794028541_1538312601_n.jpg' alt=''/>
          <MarkDown value={utilsMarkdown.whereIveBeenTo} />
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
          {/*this.props.travels.selectedPlace*/}
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
