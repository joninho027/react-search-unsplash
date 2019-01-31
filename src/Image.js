import React, { Component } from 'react';
import './Image.css';

class Image extends Component {

  state = {
    loaded : false,
    className : 'unloaded'
  }
  _onLoad = () => {
    this.setState({
      loaded: true,
      className: 'loaded'
    })
  }


  render() {
    const { source, alt, tags, onClick } = this.props;
    const { className } = this.state;
  
    return (
      <div className={ className + ` rsu-image` }>
        <div className="rsu-image-item"><img className={className} onLoad={this._onLoad} src={source + '&w=1000&q=80'} alt={alt} /></div>
        <div className="rsu-image-tags">
          { tags.map( (tag, index) => 
            <div key={index} onClick={ () => onClick(tag.title) }>{ tag.title }</div>
          )}
        </div>
        
      </div>
    );
  }
}

export default Image;
