/*
 * ReadmePage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ReadmePage extends Component {
  render() {
    return (
      <div>
        <Link className="btn" to="/">Home</Link>
      </div>
    );
  }
}
