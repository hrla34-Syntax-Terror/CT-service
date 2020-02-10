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
  };

  showAnsPopup() {
    this.setState({ answerQ: true });
  };

  hideAnsPopup() {
    this.setState({ answerQ: false });
  }
  
  render() {
    // if (this.props.QApair) {
    //     let mostHelpfulAns = this.props.QApair.answers[0];
    //     this.props.QApair.answers.forEach(answer => {
    //       if (answer.yes > mostHelpfulAns.yes) {
    //         mostHelpfulAns = answer;
    //       }
    //     });
    //     let mostRecentAns = this.props.QApair.answers[0];
    // }
 
    return (
      <div className='ct-list-entry'>
        <hr className='ct-hr'/>
        <div className='ct-user'>
          <span className='ct-nickname'>{this.props.QApair.qNickname}&nbsp;</span>
          <span>·</span>&nbsp;<span id='ct-small-font'>{moment.tz(this.props.QApair.qDate, 'America/Los_Angeles').fromNow()}</span>
          { this.props.QApair.newQ === 'false' ? (
            <span id='ct-num-of-ans' onClick={() => this.showAnsPopup()}>
              <div style={{fontWeight:"bold", fontSize:16}}>{this.props.QApair.ansCount || 0}</div>
              <div> 
              {this.props.QApair.ansCount > 1 ? (<div>answers</div>) : (<div>answer</div>)}
              </div>
            </span>
          ) : (
            <span id='ct-num-of-ans-new'>
            <div style={{fontWeight:"bold", fontSize:16}}>{this.props.QApair.ansCount || 0}</div>
            <div> 
            {this.props.QApair.ansCount > 1 ? (<div>answers</div>) : (<div>answer</div>)}
            </div>
          </span>
          ) }
        </div>
        { this.props.QApair.newQ === 'false' ? (
          <h3 className='ct-question' onClick={() => this.showAnsPopup()}>{this.props.QApair.question}</h3>
          ) : (
          <h3 className='ct-question-new'>{this.props.QApair.question}</h3>
        ) }
        { this.props.QApair.newQ === 'true' ? (
          <div className='ct-thank-msg'>Thank you for submitting a question! Questions are usually answered within a few days.</div>
        ) : (      
          <button className='ct-answer-btn' onClick={() => this.showAnsPopup()}>Answer the question</button>
        ) }
        { this.props.QApair.ansCount > 0 && (this.props.QApair.answers[0].newAns !== 'true' ? (
          <QAListAns firstAns={this.props.QApair.answers[0]} number={this.props.QApair.number} QApairs={this.props.QApairs}/>
        ) : (
          <QAListAns firstAns={this.props.QApair.answers[1]} number={this.props.QApair.number} QApairs={this.props.QApairs}/>
        )) }
        { this.state.answerQ &&
          <div className='ct-popup'>
          <div id='ct-page-mask'></div>
          <div className='ct-post-ans-popup'>
            <h2 className='ct-post-ans-title'>Post answer</h2> 
            <a href='#ct-qa-container'><span className='ct-close-post-ans-form' onClick={() => this.hideAnsPopup()}></span></a>
            <div className='ct-post-ans-user'>
              &nbsp;<span className='ct-nickname'>{this.props.QApair.qNickname}&nbsp;</span>
                <span>·</span>&nbsp;<span id='ct-small-font'>{moment.tz(this.props.QApair.qDate, 'America/Los_Angeles').fromNow()}</span>
                <span id='ct-num-of-ans-popup'>
                <div style={{fontWeight:"bold"}}>{this.props.QApair.ansCount || 0}</div>
                <div> 
                {this.props.QApair.ansCount > 1 ? (<div>answers</div>) : (<div>answer</div>)}
                </div>
             </span>
            </div>
            <h3 className='ct-post-ans-question' style={{marginTop: 10, marginBottom: 20}}>{this.props.QApair.question}</h3>
            <div  className='ct-ans-list-entry'> 
              { this.props.QApair.answers.filter((answer) => (answer.newAns === 'false')).map((answer, index) => (
                <div>
                  <div style={{marginTop: 50}}></div>
                  <QAListAns firstAns={answer} number={this.props.QApair.number} QApairs={this.props.QApairs} key={index} forPostAns={true}/>
                </div>
              )) }
            </div>
            <AnswerAQuestion answerSubmit={this.props.answerSubmit} hideAnsPopup={this.hideAnsPopup} num={this.props.QApair.number}/>
          </div>
          </div>
        }
      </div>
    );
  };
};

export default QAListEntry;