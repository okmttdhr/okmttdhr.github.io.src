import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Footer extends Component {
  constructor() {
    super();
    this.links = [
      {
        label: 'about',
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
    ];
  }

  render() {
    return (
      <div className='Footer'>
        {
          this.links.map((link, index) => {
            return (
              <Link key={index} className='Footer__linkToPage' to={link.to}>
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

export default connect(select)(Footer);
