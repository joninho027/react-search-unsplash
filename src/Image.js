import React, { Component } from 'react';
import './Image.css';

class Image extends Component {

  render() {
    const { source, alt } = this.props;
    return (
      <div className="rsu-image-item">
        <img src={source + '&w=1000&q=80'} alt={alt} />
      </div>
    );
  }
}

export default Image;
