import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export class Header extends Component {
  constructor() {
    super();
    this.SHOW_FIXED_HEADER_Y_OFFSET = 110;
    this.state = {
      showFixedHeader: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleFixedHeader.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleFixedHeader.bind(this));
  }

  toggleFixedHeader() {
    if (window.pageYOffset > this.SHOW_FIXED_HEADER_Y_OFFSET) {
      return this.setState({showFixedHeader: true});
    }
    this.setState({showFixedHeader: false});
  }

  render() {
    return (
      <div className='Header'>
        <Link className={classNames({
          'Header__logo': true,
          'Header__logo--fixed': this.props.fixed,
          'isActive': this.props.fixed && this.state.showFixedHeader,
        })} to='/'>
          okmttdhr
        </Link>
      </div>
    );
  }
}

export default Header;
