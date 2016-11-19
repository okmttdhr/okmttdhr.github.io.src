import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Navigation extends Component {
  constructor() {
    super();
    this.links = [
      {
        label: 'me',
        to: '/about',
      },
      {
        label: 'product',
        to: '/product',
      },
      {
        label: 'traveling',
        to: '/travel',
      },
      {
        label: 'house',
        to: '/house',
      },
    ];
  }

  render() {
    return (
      <div className='Navigation'>
        {
          this.links.map((link, index) => {
            return (
              <Link key={index} className='Navigation__linkToPage' to={link.to}>
                {link.label}
              </Link>
            );
          })
        }
      </div>
    );
  }
}

function select(state) {
  return {
    router: state.router
  };
}

export default connect(select)(Navigation);
