import React, { Component } from 'react';
import './App.css';
import Unsplashsearch from './Unsplashsearch';



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

    return (
      <div className="rsu-app">
        <Unsplashsearch apiKey={keyapi} />
      </div>
    );
  }
}

export default App;
