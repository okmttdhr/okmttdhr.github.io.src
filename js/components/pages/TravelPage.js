import React, { Component } from 'react';
// import PhotoSwipe from 'photoswipe';
import utilsMarkdown from 'utils/markdown';
import MarkDown from 'components/MarkDown';

export class TravelPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='TravelPage'>
        <div className='TravelPage__content'>
          <MarkDown value={utilsMarkdown.whereIveBeenTo} />
          <iframe
            className='TravelPage__MyMap'
            src="https://www.google.com/maps/d/u/0/embed?mid=12loqgLDcjQBqe5VMYi_M0fu9chw">
          </iframe>
        </div>
      </div>
    );
  }
}

export default TravelPage;
