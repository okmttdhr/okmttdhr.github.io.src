/*
 * ProductPage
 *
 */

import React, { Component } from 'react';
import { productLinks } from '../../values/';

export default class ProductPage extends Component {
  constructor() {
    super();
    this.links = productLinks;
  }

  render() {
    return (
      <div className='ProductPage'>
        <div className='ProductPage__content'>
          {
            this.links.map((link, index) => {
              return (
                <a key={index} className='ProductPage__link' href={link.to} target='_blank'>
                  {link.label}
                </a>
              );
            })
          }
        </div>
      </div>
    );
  }
}
