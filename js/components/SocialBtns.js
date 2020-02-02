/*
 * SocialBtns
 */

import React, { Component } from 'react';

export default class SocialBtns extends Component {
  render() {
    return (
      <div className='SocialBtns clearfix'>
        <a className='SocialBtns__btn SocialBtns__btn--tw mr-20' href='http://twitter.com/okmttdhr' target='_blank' />
        <a className='SocialBtns__btn SocialBtns__btn--gh mr-20' href='http://github.com/okmttdhr' target='_blank' />
        <a className='SocialBtns__btn SocialBtns__btn--qt' href='http://qiita.com/okmttdhr' target='_blank' />
      </div>
    );
  }
}
