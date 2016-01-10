/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
      <div>
        <label className="home__label">
          Change to your project name:
          <input
            className="home__input"
            type="text"
            onChange={(evt) => { dispatch(asyncChangeProjectName(evt.target.value)); }}
            defaultValue="React.js Boilerplate"
            value={projectName} />
        </label>
        <label className="home__label">
          Change to your name:
          <input
            className="home__input"
            type="text"
            onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }}
            defaultValue="mxstbr"
            value={ownerName} />
        </label>
        <Link className="btn" to="about">Setup</Link>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
