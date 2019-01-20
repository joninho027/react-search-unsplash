import React, { Component } from 'react';
import Image from './Image';

class Unsplashgallery extends Component {


  buildColumns(col) {
    const { imagesList } = this.props;
    let imagecounter = 0;
    let columns = [];
    let modulo = imagesList.length % col;
    let nbByCol = Math.floor(imagesList.length / col);
    //get an array (size = nb colums) with number of images for each column
    let layout = [];
    for (let o = 0; o < col; o++) {
      if( modulo > 0 ) {
        layout.push(nbByCol + 1);
      } else {
        layout.push(nbByCol);
      }
      modulo--;
    }
    
    if (imagesList.length !== 0) {
      for (let i = 0; i < col ; i++) {
        const row = [];
        
        for(let j = 0; j < layout[i]; j++) {
          const item = <Image 
                          source={imagesList[imagecounter].urls.regular} 
                          alt={imagesList[imagecounter].description} 
                          key={imagesList[imagecounter].id} />;
          row.push(item);
          imagecounter++;
          
        }
        columns.push(<div className="col">{row}</div>);
      }
    }
    
    
    return columns;
  }

  render() {
      
    const data = this.buildColumns(3);
    
    return (
      <div className="rsu-container">{data}</div>
    );
  }
}

export default Unsplashgallery;
