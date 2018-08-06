/*
 * FavoritesPage
 *
 */

import React, { Component } from 'react';
import { favoriteBooks, favoriteFoods } from '../../values/';

export default class FavoritesPage extends Component {
  render() {
    return (
      <div className='FavoritesPage'>
        <div className='FavoritesPage__Content'>
          <p className='FavoritesPage__Title'>Favorite Books</p>
          {favoriteBooks.map((link, index) => (
            <a key={index} className='FavoritesPage__link' href={link.to} target='_blank'>
              {link.label}
            </a>
          ))}
          <p className='FavoritesPage__Title'>Favorite Food</p>
          {favoriteFoods.map((link, index) => (
            <a key={index} className='FavoritesPage__link' href={link.to} target='_blank'>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
