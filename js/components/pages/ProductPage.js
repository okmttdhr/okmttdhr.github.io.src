/*
 * ProductPage
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { productLinksCode, productLinksArticle, productLinksArticleSub } from '../../values/';

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
          <div className='ProductPage__Content__Article--Sub'>
            <p className='ProductPage__Title'>Articles (as a Digital Nomad)</p>
            {productLinksArticleSub.map((link, index) => (
              <a key={index} className='ProductPage__link' href={link.to} target='_blank'>
                {link.label}
              </a>
            ))}
            <Link className='ProductPage__link' to={'/travel'}>And More...</Link>
          </div>
        </div>
      </div>
    );
  }
}
