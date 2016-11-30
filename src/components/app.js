import React, { Component } from 'react';

import Header from './Header';
import ShowEdit from './ShowEdit'

import style from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={style.container}>
        <Header
          title="Make it Markdown"
          imageUrl="/src/asset/header.jpeg"
          useform
        />
        <ShowEdit />
      </div>
    )
  }
}