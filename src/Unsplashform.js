import React, { Component } from 'react';

class Unsplashform extends Component {

    updateValue = (event) => {
        this.props.onChange(event.target.value);
    }

  render() {
    const { query } = this.props;  

    return (
      <div><input name="query" type="text" value={query} onChange={ this.updateValue } /></div>
    );
  }
}

export default Unsplashform;
