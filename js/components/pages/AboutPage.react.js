/*
 * AboutPage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import marked from 'marked';
import utilsMarkdown from 'utils/markdown';

export default class AboutPage extends Component {
  componentDidMount() {
    document.getElementsByClassName('marked_test')[0].innerHTML = marked(utilsMarkdown.howIBecomeDevelopper);
  }

  render() {
    return (
      <div className='AboutPage'>
        <div className='AboutPage__content'>
          <div className='marked_test'></div>
        </div>
        <Link className="btn" to="/">Home</Link>
      </div>
    );
  }
}
