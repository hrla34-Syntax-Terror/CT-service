import React from 'react';
import QAListAns from './QAListAns.jsx';
import moment from 'moment';
import AnswerAQuestion from './AnswerAQuestion.jsx';

class QAListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerQ: false
    };
    this.showAnsPopup = this.showAnsPopup.bind(this);
    this.hideAnsPopup = this.hideAnsPopup.bind(this);
  }

  showAnsPopup() {
    this.setState({ answerQ: true });
  }

  hideAnsPopup() {
    this.setState({ answerQ: false });
  }
  
  render() {
    const {qNickname, qDate, newQ, ansCount, question, answers, number} = this.props.QApair;
    const {QApairs, answerSubmit} = this.props;
    return (
      <div className="ct-list-entry">
        <hr className="ct-hr"/>
        <div className="ct-user">
          <span className="ct-nickname">{qNickname}&nbsp;</span>
          <span>·</span>&nbsp;<span id="ct-small-font">{moment.tz(qDate, 'America/Los_Angeles').fromNow()}</span>
          { newQ === 'false' ? (
            <span id="ct-num-of-ans" onClick={() => this.showAnsPopup()}>
              <div style={{fontWeight: 'bold', fontSize: 16}}>{ansCount || 0}</div>
              <div> 
                {ansCount > 1 ? (<div>answers</div>) : (<div>answer</div>)}
              </div>
            </span>
          ) : (
            <span id="ct-num-of-ans-new">
              <div style={{fontWeight: 'bold', fontSize: 16}}>{ansCount || 0}</div>
              <div> 
                {ansCount > 1 ? (<div>answers</div>) : (<div>answer</div>)}
              </div>
            </span>
          ) }
        </div>
        { newQ === 'false' ? (
          <h3 className="ct-question" onClick={() => this.showAnsPopup()}>{question}</h3>
        ) : (
          <h3 className="ct-question-new">{question}</h3>
        ) }
        { newQ === 'true' ? (
          <div className="ct-thank-msg">Thank you for submitting a question! Questions are usually answered within a few days.</div>
        ) : (      
          <button className="ct-answer-btn" onClick={() => this.showAnsPopup()}>Answer the question</button>
        ) }
        { ansCount > 0 && (answers[0].newAns !== 'true' ? (
          <QAListAns firstAns={answers[0]} number={number} QApairs={QApairs}/>
        ) : (
          <QAListAns firstAns={answers[1]} number={number} QApairs={QApairs}/>
        )) }
        { this.state.answerQ &&
          <div className="ct-popup">
            <div id="ct-page-mask"></div>
            <div className="ct-post-ans-popup">
              <h2 className="ct-post-ans-title">Post answer</h2> 
              <a href="#ct-qa-container"><span className="ct-close-post-ans-form" onClick={() => this.hideAnsPopup()}></span></a>
              <div className="ct-post-ans-user">
              &nbsp;<span className="ct-nickname">{qNickname}&nbsp;</span>
                <span>·</span>&nbsp;<span id="ct-small-font">{moment.tz(qDate, 'America/Los_Angeles').fromNow()}</span>
                <span id="ct-num-of-ans-popup">
                  <div style={{fontWeight: 'bold'}}>{ansCount || 0}</div>
                  <div> 
                    {ansCount > 1 ? (<div>answers</div>) : (<div>answer</div>)}
                  </div>
                </span>
              </div>
              <h3 className="ct-post-ans-question" style={{marginTop: 10, marginBottom: 20}}>{question}</h3>
              <div className="ct-ans-list-entry"> 
                { answers.filter((answer) => (answer.newAns === 'false')).map((answer, index) => (
                  <div>
                    <div style={{marginTop: 50}}></div>
                    <QAListAns firstAns={answer} number={number} QApairs={QApairs} key={index} forPostAns={true}/>
                  </div>
                )) }
              </div>
              <AnswerAQuestion answerSubmit={answerSubmit} hideAnsPopup={this.hideAnsPopup} num={number}/>
            </div>
          </div>
        }
      </div>
    );
  };
};

export default QAListEntry;