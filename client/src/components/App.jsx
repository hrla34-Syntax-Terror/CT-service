import React from 'react';
import QAList from './QAList.jsx';
import axios from 'axios';
import AskAQuestion from './AskAQuestion.jsx';


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
        <h2 className='CTQandA'>Questions &amp; Answers</h2>
        <a href='#CTaskAQuestion'><button className='CTaskAQuestion'>Ask a question</button></a>
        <div className='CTqaBlock'>
          <div id='CTqaTotal'>
            <span>1 &ndash; {this.state.QApairs.length} of {this.state.QApairs.length} Questions</span>
            <span className='CTsortBy'>Sort by:&nbsp;
              <select className='CTdropDown'>
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
        <div id='CTaskAQuestion'><a href='CTaskAQuestion'></a>
          <AskAQuestion />
        </div>
      </div>
    );
  };
};

export default App;