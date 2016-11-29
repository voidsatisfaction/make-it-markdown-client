import React, { Component } from 'react';
import Radium from 'radium';

import Urlform from '../Urlform';

import style from './style';

class Header extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div style={style.header}>
        <div style={style.titleWrapper}>
          <p className="lead" style={style.title}>Make it Markdown</p>
        </div>
        <div style={style.urlForm}>
          <Urlform />
        </div>
      </div>
    );
  }
}
export default Radium(Header);