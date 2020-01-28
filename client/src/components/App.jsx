import React from 'react';
import QAList from './QAList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QApairs: []
    }
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    axios
      .get('/api')
      .then((result) => this.setState({ QApairs: result.data }))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <h2 className='QandA'>Questions &amp; Answers</h2>
        <button className='askAQuestion'>Ask a question</button>
        <div className='qaBlock'>
          <div id='qaTotal'>
            <span>1-3 of 3 Questions</span>
            <span className='sortBy'>Sort by:&nbsp;
              <select className='dropDown'>
                <option>Newest questions</option>
                <option>Newest answers</option>
                <option>Most answered</option>
                <option>Answers needed</option>
                <option>Most helpful answers</option>
              </select>
            </span>
          </div>
        <hr/>
        <div>
        </div>
        <QAList QApairs={this.state.QApairs}/>
        </div>
      </div>
    );
  };
};

export default App;