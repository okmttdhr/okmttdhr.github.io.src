/*
 * SocialBtns
 */

import React, { Component } from 'react';

export default class SocialBtns extends Component {
  render() {
    return (
      <div className="SocialBtns mb-30 clearfix">
        <a className="SocialBtns__btn SocialBtns__btn--fb mr-20" href="http://www.facebook.com/okmttdhr" target="_blank" />
        <a className="SocialBtns__btn SocialBtns__btn--tw mr-20" href="http://twitter.com/okmttdhr" target="_blank" />
        <a className="SocialBtns__btn SocialBtns__btn--qt mr-20" href="http://qiita.com/okmttdhr" target="_blank" />
        <a className="SocialBtns__btn SocialBtns__btn--mmm mr-20" href="https://www.google.co.jp/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=site%3Ablog.mmmcorp.co.jp%20okp" target="_blank" />
        <a className="SocialBtns__btn SocialBtns__btn--gh" href="http://github.com/okmttdhr" target="_blank" />
      </div>
    );
  }
}
