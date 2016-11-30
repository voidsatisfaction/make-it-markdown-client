import React, { Component } from 'react';
import Radium from 'radium';

import style from './style';

class ShowEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={style.container}>
        <div style={style.section}>
          <h1 style={style.text}>Raw HTML</h1>
          <textarea style={style.textarea} className="form-control" rows="20" cols=""></textarea>
        </div>
        <div style={style.section}>
          <h1 style={style.text}>MD Result</h1>
          <textarea style={style.textarea} className="form-control" rows="20" cols=""></textarea>
        </div>
      </div>
    );
  }
}

export default Radium(ShowEdit);