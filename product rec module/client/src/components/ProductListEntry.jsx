import React from 'react';

class ProductListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    
  }

  render() {
    var { product, clickHandler } = this.props;
    return (
      <div className='ct2-product'>
        <div className='ct2-img-container'>
          <img id='ct2-img' src={product.image} name={product.number} onClick={(e) => {clickHandler(e)}}/>
        </div>
        <div className='ct2-ratings'>
        { product.numReviews === 0 ? (
          <div className='ct2-avg-stars-row'>
            <div>
              <span className='ct2-avg-stars-blank-0'>★★★★★</span>
              <span className='ct2-avg-stars-fill' style={{ width: 0 + '%' }}>★★★★★</span>
            </div>
            <div className='ct2-num-of-reviews'>({product.numReviews})</div>
          </div>
        ) : (
          <div className='ct2-avg-stars-row'>
            <div>
              <span className='ct2-avg-stars-blank'>★★★★★</span>
              <span className='ct2-avg-stars-fill' style={{ width: `${product.rating}%` }}>★★★★★</span>
            </div>
            <div className='ct2-num-of-reviews'>({product.numReviews})</div>
          </div>
        ) }
        </div>
        <div className='ct2-brand-and-name'>
          <div id='ct2-brand' name={product.number} onClick={(e) => {clickHandler(e)}}>{product.brand}</div>
          <div id='ct2-name' name={product.number} onClick={(e) => {clickHandler(e)}}>{product.name}</div>
        </div>
        <div id='ct2-price'>${product.price}</div>
      </div>
    )
  }  
}

export default ProductListEntry;