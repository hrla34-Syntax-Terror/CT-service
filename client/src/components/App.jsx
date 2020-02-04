import React from 'react';
import QAList from './QAList.jsx';
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
    }
    this.showAskAQuestion = this.showAskAQuestion.bind(this);
    this.hideAskAQuestion = this.hideAskAQuestion.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
    this.closeSubmitQPopup = this.closeSubmitQPopup.bind(this);
    this.getData = this.getData.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
    this.clickSelection = this.clickSelection.bind(this);
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

  // changeHandler(e) {
  //   this.setState({ currentSelection: e.target.value });
  //   axios
  //     .post('/api/sort', { sort: e.target.value })
  //     .then((result) => this.setState({ QApairs: result.data }))
  //     .catch((err) => console.error(err));
  // }

  clickSelection(e) {
    var selected = e.target.getAttribute('name');
    this.setState({ currentSelection: e.target.textContent});
    axios
      .post('/api/sort', { sort: selected })
      .then((result) => this.setState({ QApairs: result.data }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      
      <div id='CTqaContainer'><a href='CTqaContainer'></a>
        <h2 className='CTQandA'>Questions &amp; Answers</h2>
        <a href='#CTaskAQuestion'><button className='CTaskAQuestion' onClick={() => this.showAskAQuestion()}>Ask a question</button></a>
        <div className='CTqaBlock'>
          <div id='CTqaTotal'>
            <span>1 &ndash; {this.state.QApairs.length} of {this.state.QApairs.length} Questions</span>
            <span className='CTsortBy'>Sort by:&nbsp;
              <button className='CTdropdownBtn'>{this.state.currentSelection}</button>&#9662;
              <div className='CTdropdownContent'>
                <div name='newestQ' onClick={(e) => this.clickSelection(e)}>Newest questions</div>
                <div name='newestAns' onClick={(e) => this.clickSelection(e)}>Newest answers</div>
                <div name='mostAns' onClick={(e) => this.clickSelection(e)}>Most answered</div>
                <div name='ansNeeded' onClick={(e) => this.clickSelection(e)}>Answers needed</div>
                <div name='mostHelpful' onClick={(e) => this.clickSelection(e)}>Most helpful answers</div>
              </div>
            </span>
          </div>
        <div>
        </div>
        <QAList QApairs={this.state.QApairs} answerSubmit={this.answerSubmit}/>
        </div>
        <div id='CTaskAQuestion'><a href='CTaskAQuestion'></a>
        { this.state.showAskQ ? (<AskAQuestion  QApairs={this.state.QApairs} hideAskAQuestion={this.hideAskAQuestion} questionSubmit={this.questionSubmit} getData={this.getData}/> ) : (<div/>) }
        </div>
        { this.state.submitQuestion ? (
          <div>
            <div id='CTpageMask'></div>
            <div className='CTpopupSubmit'>
              <span className='CTcloseSubmitQ' onClick={() => this.closeSubmitQPopup()}></span>
              <span className="CTcheckmark">
                <div className="CTcheckmark_circle"></div>
                <div className="CTcheckmark_stem"></div>
                <div className="CTcheckmark_kick"></div>
              </span>
              <div className='CTsubmitCheck'></div>
              <h2 id='CTsubmitMsg'>Your question was submitted!</h2>
            </div>
          </div>
        ) : (<div/>) }
         { this.state.submitAnswer ? (
          <div>
            <div id='CTpageMask'></div>
            <div className='CTpopupSubmit'>
              <span className='CTcloseSubmitQ' onClick={() => this.closeSubmitAPopup()}></span>
              <span className="CTcheckmark">
                <div className="CTcheckmark_circle"></div>
                <div className="CTcheckmark_stem"></div>
                <div className="CTcheckmark_kick"></div>
              </span>
              <div className='CTsubmitCheck'></div>
              <h2 id='CTsubmitMsg'>Your answer was submitted!</h2>
            </div>
          </div>
        ) : (<div/>) }
      </div>
    );
  };
};

export default App;