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
        <a className='SocialBtns__btn SocialBtns__btn--qt mr-20' href='http://qiita.com/okmttdhr' target='_blank' />
        <a className='SocialBtns__btn SocialBtns__btn--mmm' href='https://www.google.co.jp/search?q=site%3Ablog.mmmcorp.co.jp+okp&biw=1440&bih=776&source=lnt&tbs=sbd%3A1%2Ccdr%3A1%2Ccd_min%3A2%2F1%2F2015%2Ccd_max%3A&tbm=#q=site:blog.mmmcorp.co.jp+okp&tbs=sbd:1,cdr:1,cd_min:2/1/2015&start=0' target='_blank' />
      </div>
    );
  }
}
