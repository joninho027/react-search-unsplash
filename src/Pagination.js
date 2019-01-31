import React, { Component } from 'react';

class Pagination extends Component {

  buildPagination() {
    const { nbPages, deltaPage, currentPage, onClick } = this.props;
    let items = [];
    let startPage = currentPage;
    if ( nbPages - currentPage < deltaPage ) {
        startPage = nbPages - deltaPage + 1;
    }

    if ( nbPages > 1 ) {
        const previousButton = this.buildPreviousButton(currentPage, onClick);
        items.push(previousButton);
    }
    
    for (let i = startPage; i <= nbPages; i++) {
        let className = '';
        if( i > (deltaPage + currentPage - 1) ) {
            items.push( <span key="points">...</span>);
            items.push(<button key={nbPages} onClick={ () => onClick(nbPages)}>{nbPages}</button>);
            break;
        }
        else {
            i === currentPage ? className = 'active' : className = '';
            items.push(<button className={className} key={i} onClick={ () => onClick(i)}>{i}</button>);
        }
    }

    if ( nbPages > 1 ) {
        const nextButton = this.buildNextButton(currentPage, nbPages, onClick);
        items.push(nextButton);
    } 
    return items;
  }

  buildPreviousButton(currentPage, onClick) {
    if( currentPage === 1 ) {
        return <button className="disabled" >Prev</button>
    } else {
        return <button className="" onClick={ () => onClick(currentPage - 1) }>Prev</button>
    }
  }

  buildNextButton(currentPage, nbPages, onClick) {
    if( currentPage === nbPages  ) {
        return <button className="disabled" >Next</button>
    } else {
        return <button className="" onClick={ () => onClick(currentPage + 1) }>Next</button>
    }
  }


  render() {
        const pagination = this.buildPagination();
        const { nbPages } = this.props;
        return (
            <div className="">{nbPages > 1 && pagination}</div>
        );
  }
}

export default Pagination;
