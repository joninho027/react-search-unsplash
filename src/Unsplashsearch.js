import React, { Component } from 'react'
import Unsplashgallery from './Unsplashgallery'
import Unsplashform from './Unsplashform'
import Pagination from './Pagination'
import './Unsplashsearch.css'
import Unsplash, { toJson } from 'unsplash-js';


class Unsplashsearch extends Component {

  state = {
    imagesList : [],
    query: '',
    loading: false,
    currentPage: 1,
    nbPages: 1,
    deltaPage: 5
  }

  componentDidMount() {
    //this.getImages();
    const { apiKey } = this.props;
    this.unsplash = new Unsplash({
      applicationId: apiKey,
      secret: "3db7aae3c8c82900a595b977978afface46bd8caba3745fa1dc5a40211764226"
    });
  }

  getImages() {
    
    const { currentPage, query } = this.state;
    this.setState({
      loading: true
    })
    this.unsplash.search.photos(query, currentPage, 18)
    .then( toJson)
    .then( (result) => {
      this.setState({
        imagesList : result.results,
        loading: false,
        nbPages: result.total_pages
      })
    });
  }

  //Arrow function for binding
  changeQuery = (value) => {
    this.setState(
      { 'query' : value, currentPage: 1 },
      () => this.getImages()
    );
  }

  //Arrow function for binding
  changeQueryValue = (value) => {
    this.setState(
      { 'query' : value },
    );
  }

  gotoPage(page) {
    this.setState(
      { currentPage: page },
      () => this.getImages(this.state.query)
    );
    
  }

  downloadPhoto(photo) {
    this.unsplash.photos.downloadPhoto(photo);
  }


  render() {
    const { imagesList, loading, query, nbPages, deltaPage, currentPage } = this.state;

    return (
      <div className="">
          <h1>Unsplash search photo from API and React</h1>
          <Unsplashform query={query} onSubmit={ (value) => this.changeQuery(value) } onChange={ (value) => this.changeQueryValue(value) } />
          
          <Pagination nbPages={nbPages} deltaPage={deltaPage} currentPage={currentPage} onClick={ (page) => this.gotoPage(page) } />
          <div className="rsu-gallery">
            <div className="rsu-loading">{loading && <div className="rsu-ring"><div></div><div></div><div></div><div></div></div>  }</div>
            <Unsplashgallery imagesList={imagesList} onClick={ (tag) => this.changeQuery(tag)  } />
          </div>
          
          
      </div>
    );
  }
}

export default Unsplashsearch;
