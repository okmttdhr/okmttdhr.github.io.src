/*
 * AboutPage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component } from 'react';
import utilsMarkdown from 'utils/markdown';
import MarkDown from 'components/MarkDown';

export default class AboutPage extends Component {
  render() {
    return (
      <div className='AboutPage'>
        <div className='AboutPage__content'>
          <MarkDown value={utilsMarkdown.howIBecomeDevelopperEn} />
        </div>
      </div>
    );
  }
}
