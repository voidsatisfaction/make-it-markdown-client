import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Urlform from './Urlform';

import style from './style';

class Header extends Component {
  static defaultProps = {
    useform: false,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    useform: PropTypes.bool,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { title, imageUrl, useform } = this.props;
    return (
      <div style={[style.header, { backgroundImage: `url(${imageUrl})` }]}>
        <div style={style.titleWrapper}>
          <p className="lead" style={style.title}>{title}</p>
        </div>
        {
          useform ?
          <div style={style.urlForm}>
            <Urlform />
          </div> : 
          <div/>
        }
      </div>
    );
  }
}
export default Radium(Header);