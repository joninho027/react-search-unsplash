import React, { Component } from 'react';
import Unsplashgallery from './Unsplashgallery'
import Unsplashform from './Unsplashform'
import './Unsplashsearch.css'

class Unsplashsearch extends Component {

  state = {
    imagesList : [],
    query: ''
  }

  componentDidMount() {
    this.getImages();
  }

  getImages(query) {
    const { apiKey } = this.props;
    fetch("https://api.unsplash.com/search/photos/?client_id=" + apiKey + "&page=1&per_page=18&query=" + query)
    .then( res => res.json() )
    .then( (result) => {
      this.setState({
        imagesList : result.results
      })
    });
  }

  //Arrow function for binding
  changeQuery = (value) => {
    this.setState({
        'query' : value
    })
    this.getImages(value);
    console.log(value);
  }


  render() {
    const { imagesList, query } = this.state;
    
    return (
      <div className="">
          <Unsplashform onChange={ (value) => this.changeQuery(value) } />
          <Unsplashgallery imagesList={imagesList} />
      </div>
    );
  }
}

export default Unsplashsearch;
