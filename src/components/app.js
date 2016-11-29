import React, { Component } from 'react';

import Header from './Header';

import style from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.container} className="col-md-12 col-xs-12">
        <Header />
        <div>
          <h1>Hello world!</h1>
        </div>
        <p className="lead">this is lead content</p>
      </div>
    )
  }
}