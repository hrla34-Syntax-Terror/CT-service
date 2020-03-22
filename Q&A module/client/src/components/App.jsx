import React from 'react';
import QAList from './QAList.jsx';
import CheckMarkSubmit from './CheckMarkSubmit.jsx';
import axios from 'axios';
import AskAQuestion from './AskAQuestion.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QApairs: [],
      showAskQ: false,
      submitQuestion: false,
      submitAnswer: false,
      currentSelection: 'Most helpful answers'
    };

    this.showAskAQuestion = this.showAskAQuestion.bind(this);
    this.hideAskAQuestion = this.hideAskAQuestion.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
    this.closeSubmitQPopup = this.closeSubmitQPopup.bind(this);
    this.getData = this.getData.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
    this.clickSelection = this.clickSelection.bind(this);
  }

  componentDidMount() {
    const productID = Number(document.location.href.split('/')[3]);
    this.getData(productID);
  }

  getData(productID) {
    axios
      .get(`http://localhost:8002/api/${productID}`)
      .then((result) => this.setState({ QApairs: result.data[0].QApairs }))
      .catch((err) => console.error(err));
  }

  showAskAQuestion() {
    this.setState({
      showAskQ: true
    });
  }

  hideAskAQuestion() {
    this.setState({
      showAskQ: false
    });
  }

  questionSubmit() {
    this.setState({ submitQuestion: true });
  }

  answerSubmit() {
    this.setState({ submitAnswer: true });
  }

  closeSubmitQPopup() {
    this.setState({ submitQuestion: false });
  }

  closeSubmitAPopup() {
    this.setState({ submitAnswer: false });
  }

  clickSelection(e) {
    const productID = Number(document.location.href.split('/')[3]);
    const selected = e.target.getAttribute('name');
    this.setState({ currentSelection: e.target.textContent});
    axios
      .post('http://localhost:8002/api/sort', { sort: selected, productID })
      .then((result) => this.setState({ QApairs: result.data[0].QApairs }))
      .catch((err) => console.error(err));
  }

  render() {
    const {QApairs, currentSelection, showAskQ, submitQuestion, submitAnswer} = this.state;
    const sortNames = ['newestQ', 'newestAns', 'mostAns', 'ansNeeded', 'mostHelpful'];
    const sortBy = ['Newest questions', 'Newest answers', 'Most answered', 'Answers needed', 'Most helpful answers'];
    return (
      <div id="ct-qa-container"><a href="ct-qa-container"></a>
        <h2 className="ct-q-and-a">Questions &amp; Answers</h2>
        <div className="ct-blue-btn-container">
          <a href="#ct-ask-q-form">
            <button className="ct-blue-btn" id="ct-ask-q-btn" onClick={() => this.showAskAQuestion()}>Ask a question</button>
          </a>
        </div>
        <div className="ct-qa-block">
          <div id="ct-qa-total">
            <span className="ct-num-of-q">1 &ndash; {QApairs.length} of {QApairs.length} Questions</span>
            <span className="ct-sortby">Sort by:&nbsp;
              <button className="ct-dropdown-btn">{currentSelection}</button>&nbsp;&#9662;
              <div className="ct-dropdown-selection">
                { sortNames.map((name, index) => <div name={name} key={index} onClick={(e) => this.clickSelection(e)}>{sortBy[index]}</div>) }
              </div>
            </span>
          </div>
          { QApairs.length && 
          <QAList QApairs={QApairs} answerSubmit={this.answerSubmit} currentSelection={this.currentSelection}/>
          }
        </div>
        <div id="ct-ask-q-form"><a href="ct-ask-q-form"></a>
          { showAskQ && 
            <AskAQuestion QApairs={QApairs} hideAskAQuestion={this.hideAskAQuestion} questionSubmit={this.questionSubmit} getData={this.getData}/> }
        </div>
        { submitQuestion &&
          <div className="ct-popup">
            <div id="ct-page-mask"></div>
            <div className="ct-popup-submit">
              <span className="ct-close-submit-popup" onClick={() => this.closeSubmitQPopup()}></span>
              <CheckMarkSubmit/>
              <div className="ct-submit-box"></div>
              <h2 id="ct-submit-msg">Your question was submitted!</h2>
            </div>
          </div>
        }
        { submitAnswer &&
          <div>
            <div id="ct-page-mask"></div>
            <div className="ct-popup-submit">
              <span className="ct-close-submit-popup" onClick={() => this.closeSubmitAPopup()}></span>
              <CheckMarkSubmit/>
              <div className="ct-submit-box"></div>
              <h2 id="ct-submit-msg">Your answer was submitted!</h2>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;