/*
 * ProductPage
 *
 */

import React, { Component } from 'react';

export default class ProductPage extends Component {
  constructor() {
    super();
    this.links = [
      {
        label: 'Setsuna',
        to: 'https://github.com/okmttdhr/setsuna-firebase',
      },
      {
        label: '3D Fire',
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
              return (
                <p key={index}>
                  <a className='ProductPage__link' href={link.to} target='_blank'>
                    {link.label}
                    </a>
                </p>
              );
            })
          }
        </div>
      </div>
    );
  }
}
