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
    return (
      <div className='CTlistEntry'>
        <div className='CTuser'>
          <span className='CTnickname'>{this.props.QApair.qNickname}&nbsp;</span>
          <span>·</span>&nbsp;<span id='CTsmallFont'>{moment(this.props.QApair.qDate, 'MMDDYYYY').fromNow()}</span>
          <span id='CTnumAns'>
            <div style={{fontWeight:"bold"}}>{this.props.QApair.answers.length}</div>
            <div> 
            {this.props.QApair.answers.length > 1 ? (<div>answers</div>) : (<div>answer</div>)}
            </div>
          </span>
        </div>
        <h3 className='CTquestion'>{this.props.QApair.question}</h3>
        { this.props.QApair.newQ === "true" ? (
          <div className='CTthankMsg'>Thank you for submitting a question! Questions are usually answered within a few days.</div>
        ) : (      
          <button className='CTanswerButton' onClick={() => this.showAnsPopup()}>Answer the question</button>
        ) }
        { this.props.QApair.answers.length !== 0 ? (<QAListAns firstAns={this.props.QApair.answers[0]} number={this.props.QApair.number} QApairs={this.props.QApairs}/>) : (<div/>) }
        { this.state.answerQ ? (
          <div>
          <div id='CTpageMask'></div>
          <div className='CTansPopup'>
            <h2 className='CTQandA' id='CTpostAnsTitle'>Post answer</h2> 
            <a href='#CTqaContainer'><span className='CTcloseAskQ' onClick={() => this.hideAnsPopup()}></span></a>
            <div className='CTuser'>
              <span className='CTnickname'>{this.props.QApair.qNickname}&nbsp;</span>
                <span>·</span>&nbsp;<span id='CTsmallFont'>{moment(this.props.QApair.qDate, 'MMDDYYYY').fromNow()}</span>
                <span id='CTnumAns'>
                <div style={{fontWeight:"bold"}}>{this.props.QApair.answers.length}</div>
                <div> 
                {this.props.QApair.answers.length > 1 ? (<div>answers</div>) : (<div>answer</div>)}
                </div>
             </span>
            </div>
            <h3 className='CTquestion'>{this.props.QApair.question}</h3>
            { this.props.QApair.answers.map((answer, index) => (
              <QAListAns firstAns={answer} number={this.props.QApair.number} QApairs={this.props.QApairs} key={index}/>
            )) }
            <AnswerAQuestion/>
          </div>
          </div>
        ) : (<div/>) }
      </div>
    );
  };
};

export default QAListEntry;