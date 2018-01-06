/*
 * BooksPage
 *
 */

import React, { Component } from 'react';
import { bookLinks } from '../../values/';

export default class BooksPage extends Component {
  render() {
    return (
      <div className='BooksPage'>
        <div className='BooksPage__Content'>
          <p className='BooksPage__Title'>Favorite Books</p>
          {bookLinks.map((link, index) => (
            <a key={index} className='BooksPage__link' href={link.to} target='_blank'>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
