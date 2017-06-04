import React, { Component } from 'react';
import { range, chunk } from 'lodash';
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
          <iframe className='TravelPage__MyMap' src="https://www.google.com/maps/d/u/0/embed?mid=12loqgLDcjQBqe5VMYi_M0fu9chw"></iframe>
          <div className='TravelPage__images'>
            {
              chunk(range(134), 3).reverse().map((chunkedNumbers, index) => {
                const chunkedImages = chunkedNumbers.reverse().map((num, i) => {
                  return (<div key={i} className='TravelPage__images__chunk__imageWrapper'><img src={require(`images/instagram/0${num}.jpg`)} /></div>);
                });
                return (<div className='TravelPage__images__chunk' key={index}>{chunkedImages}</div>);
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TravelPage;
