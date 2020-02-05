import React from 'react';
import axios from 'axios';
import ProductListEntry from './ProductListEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get('/api')
      .then((result) => this.setState({ products: result.data }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h2 className='ct2-title'>Previously viewed</h2>
        <div className='ct2-product-list'>
          { this.state.products.slice(0,6).map((product, index) => (<ProductListEntry product={product} key={index}/>))}
        </div>
        <h2 className='ct2-title'>People who bought this item also bought</h2>
        <div className='ct2-product-list'>
          { this.state.products.slice(6).map((product, index) => (<ProductListEntry product={product} key={index}/>))}
        </div>
      </div>
    );
  };
};

export default App;