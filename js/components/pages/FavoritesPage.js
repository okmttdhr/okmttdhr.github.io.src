/*
 * FavoritesPage
 *
 */

import React, { Component } from 'react';
import { favoriteLinks } from '../../values/';

export default class FavoritesPage extends Component {
  render() {
    return (
      <div className='FavoritesPage'>
        <div className='FavoritesPage__Content'>
          <p className='FavoritesPage__Title'>Favorite Favorites</p>
          {favoriteLinks.map((link, index) => (
            <a key={index} className='FavoritesPage__link' href={link.to} target='_blank'>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
