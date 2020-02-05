import React from 'react';

var ProductListEntry = ({ product }) => {
  return (
    <div className='ct2-product'>
      <div className='ct2-img-container'>
        <img id='ct2-img' src={product.image}/>
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
        <div id='ct2-brand'>{product.brand}</div>
        <div id='ct2-name'>{product.name}</div>
      </div>
      <div id='ct2-price'>${product.price}</div>
    </div>
  )
}

export default ProductListEntry;