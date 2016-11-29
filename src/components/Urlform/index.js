import React, { Component } from 'react';

import style from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.wrapper}>
        <form style={style.form}>
          <input
            style={style.input}
            type="text" 
            className="form-control"
            id="exampleInputName2"
            placeholder="Enter any url where you want to extract md file" 
          />
          <button style={style.button} type="submit" className="btn btn-default">
            Get .md
          </button>
        </form>
      </div>
    )
  }
}