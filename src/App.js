import React, { Component } from 'react';
import './App.css';
import Unsplashsearch from './Unsplashsearch';

const keyapi = '';

class App extends Component {

  state = {
    query : '',
  }

  //Arrow function for binding
  changeQuery = (event) => {
    this.setState({
      query : event.target.value
    })
  }

  render() {
    const { query } = this.state;

    return (
      <div className="rsu-app">
        <Unsplashsearch apiKey={keyapi} />
      </div>
    );
  }
}

export default App;
