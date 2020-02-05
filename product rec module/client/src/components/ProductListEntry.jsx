import React from 'react';

var ProductListEntry = ({ product }) => {
  return (
    <div className='ct2-product'>
      <div id='ct2-img'></div>
      <div className='ct2-brand-and-name'>
        <div id='ct2-brand'>{product.brand}</div>
        <div id='ct2-name'>{product.name}</div>
      </div>
      <div id='ct2-price'>${product.price}</div>
    </div>
  )
}

export default ProductListEntry;