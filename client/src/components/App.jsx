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
      currentSelection: 'mostHelpful'
    }
    this.showAskAQuestion = this.showAskAQuestion.bind(this);
    this.hideAskAQuestion = this.hideAskAQuestion.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
    this.closeSubmitQPopup = this.closeSubmitQPopup.bind(this);
    this.getData = this.getData.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
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

  changeHandler(e) {
    this.setState({ currentSelection: e.target.value });
    axios
      .post('/api/sort', { sort: e.target.value })
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
              <select className='CTdropDown' value={this.state.currentSelection} onChange={(e) => this.changeHandler(e)}>
                <option value='newestQ'>Newest questions</option>
                <option value='newestAns'>Newest answers</option>
                <option value='mostAns'>Most answered</option>
                <option value='ansNeeded'>Answers needed</option>
                <option value='mostHelpful'>Most helpful answers</option>
              </select>
            </span>
          </div>
        <hr/>
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