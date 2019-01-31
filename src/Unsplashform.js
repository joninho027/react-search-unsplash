import React, { Component } from 'react';

class Unsplashform extends Component {

    state = {
      query: ''
    }

    submitForm = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.localQuery);
    }

    updateValueQuery = (event) => {
      const query = event.target.value;
      this.setState(
        { localQuery: query},
        () => { this.props.onChange(query)}
      );
      
    }


  render() {
    const { query } = this.props;

    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input name="query" type="text" onChange={ this.updateValueQuery } value={query} placeholder="Search free hight-resolution photo"/>
          <button types="submit">Search</button>
        </form>
        
        </div>
    );
  }
}

export default Unsplashform;
