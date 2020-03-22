import React from 'react';
import axios from 'axios';
import ProductListEntry from './ProductListEntry.jsx';
import ProductDetails from './ProductDetails.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: ''
    };
    this.getData = this.getData.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const productID = Number(document.location.href.split('/')[3]);
    this.getData(productID);
  }

  getData(productID) {
    axios
      .get(`http://localhost:8001/api/${productID}`)
      .then((result) => this.setState({ 
        products: result.data,
        currentProduct: result.data[0]
      }))
      .catch((err) => console.error(err));
  }

  clickHandler(e) {
    const productID = e.target.getAttribute('name');
    axios
      .post(`http://localhost:8001/api/${productID}`)
      .then((result) => { window.location = `/${result.data}`; })
      .catch((err) => console.error(err));
  }

  render() {
    const {currentProduct} = this.state;
    return (
      <div>
        <div className = "ct2-product-details">
          <ProductDetails product={currentProduct}/>
        </div>
        <div className="ct2-product-rec">
          <h2 className="ct2-title">Previously viewed</h2>
          <div className="ct2-product-list">
            { currentProduct && currentProduct.list.slice(0, 6).map((product, index) => 
              <ProductListEntry product={product} key={index} clickHandler={this.clickHandler}/>)}
          </div>
          <h2 className="ct2-title">People who bought this item also bought</h2>
          <div className="ct2-product-list">
            { currentProduct && currentProduct.list.slice(6).map((product, index) => 
              <ProductListEntry product={product} key={index} clickHandler={this.clickHandler}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;