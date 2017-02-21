/*
 * ProductPage
 *
 */

import React, { Component } from 'react';
import { productLinksCode, productLinksArticle } from '../../values/';

export default class ProductPage extends Component {
  render() {
    return (
      <div className='ProductPage'>
        <div className='ProductPage__Content'>
          <div className='ProductPage__Content__Code'>
            <p className='ProductPage__Title'>Products</p>
            {productLinksCode.map((link, index) => (
              <a key={index} className='ProductPage__link' href={link.to} target='_blank'>
                {link.label}
              </a>
            ))}
          </div>
          <div className='ProductPage__Content__Article'>
            <p className='ProductPage__Title'>Articles</p>
            {productLinksArticle.map((link, index) => (
              <a key={index} className='ProductPage__link' href={link.to} target='_blank'>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
