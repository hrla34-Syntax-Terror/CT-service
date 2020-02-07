import React from 'react';

var ProductDetails = ({ product }) => {
  return (
    <div>
      <div className='ct2-desc-container'>
            {product.desc}
      </div>
      <div className='ct2-details-container'>
        <h1 className='ct2-nitty-gritty'>The nitty gritty</h1>
        <div className='ct2-features-specs'>
          <div className='ct2-features'>
            <h2 id='ct2-h2'>Features</h2>
            <ul id='ct2-features-content'>
              {product && product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div id='ct2-view'>{product.view}</div>
          </div>
          <div className='ct2-specs'>
            <h2 id='ct2-h2'>Technical specs</h2>
            <div className='ct2-spec-table'>
            <table id='ct2-spec-table'>
              <tbody>
                {product && Object.keys(product.specs).filter((spec) => (product.specs[spec].length)).map((spec, index) => (
                  <tr key={index}>
                    <td id='ct-spec-key'>{product.specs[spec][0]}</td>
                    <td id='ct-spec-value'>{product.specs[spec][1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;

