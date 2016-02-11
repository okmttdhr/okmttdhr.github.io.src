/*
 * ProductPage
 *
 */

import React, { Component } from 'react';

export default class ProductPage extends Component {
  constructor () {
    super();
    this.links = [
      {
        label: 'Meteor React Redux Boilerplate',
        to: 'https://github.com/okmttdhr/meteor-react-redux-boilerplate',
      },
      {
        label: 'Rich Text to Markdown',
        to: 'https://github.com/okmttdhr/rich-text-to-markdown',
      },
      {
        label: 'Nikkei Hacker',
        to: 'https://github.com/okmttdhr/nikkei-hacker',
      },
      {
        label: 'Checklist for Remote Working',
        to: 'https://github.com/okmttdhr/remote-work-check-list',
      },
      {
        label: 'Fire with three.js',
        to: 'https://github.com/okmttdhr/threejs-fire',
      },
    ];
  }

  render() {
    return (
      <div className='ProductPage'>
        <div className='ProductPage__content baseContent'>
          {
            this.links.map((link, index) => {
              return <p key={index}>
                <a className='ProductPage__link' href={link.to} target='_blank'>
                  {link.label}
                </a>
              </p>;
            })
          }
        </div>
      </div>
    );
  }
}
