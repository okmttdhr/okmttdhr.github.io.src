import React, { Component } from 'react';
import { Link } from 'react-router';

export class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Header'>
        <Link className='Header__logo' to='/'>
          okmttdhr
        </Link>
      </div>
    );
  }
}

export default Header;
