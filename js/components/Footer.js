import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class Footer extends Component {
  constructor() {
    super();
    this.links = [
      {
        label: '>> home',
        to: '/',
      },
      {
        label: '>> product',
        to: '/product',
      },
      {
        label: '>> traveling',
        to: '/travel',
      },
      {
        label: '>> background',
        to: '/about',
      }
    ];
  }

  render() {
    return (
      <div className='Footer baseContent'>
        {
          this.links.map((link, index) => {
            if (link.to === this.props.router.location.pathname) return null;
            return (
              <p key={index}>
                <Link className='Footer__linkToPage' to={link.to}>
                  {link.label}
                </Link>
              </p>
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
