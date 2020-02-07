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
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get('http://localhost:8090/api/3')
      .then((result) => this.setState({ 
        products: result.data,
        currentProduct: result.data[0]
      }))
      .catch((err) => console.error(err));
  }

  render() {
    console.log(this.state.currentProduct)
    return (
      <div>
        <div className = 'ct2-product-details'>
          <ProductDetails product={this.state.currentProduct}/>
        </div>
        <div className='ct2-product-rec'>
          <h2 className='ct2-title'>Previously viewed</h2>
          <div className='ct2-product-list'>
            { this.state.currentProduct && this.state.currentProduct.list.slice(0,6).map((product, index) => (<ProductListEntry product={product} key={index}/>))}
          </div>
          <h2 className='ct2-title'>People who bought this item also bought</h2>
          <div className='ct2-product-list'>
            { this.state.currentProduct && this.state.currentProduct.list.slice(6).map((product, index) => (<ProductListEntry product={product} key={index}/>))}
          </div>
        </div>
      </div>
    );
  };
};

export default App;