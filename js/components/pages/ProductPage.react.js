/*
 * ProductPage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
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
      }
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
