import React from 'react';
import QAListAns from './QAListAns.jsx';
import moment from 'moment';

var QAListEntry = (props) => {
  return (
    <div className='CTlistEntry'>
      <div className='CTuser'>
        <span className='CTnickname'>{props.QApair.qNickname}&nbsp;</span>
        <span>·</span>&nbsp;<span id='CTsmallFont'>{moment(props.QApair.qDate, 'MMDDYYYY').fromNow()}</span>
        <span id='CTnumAns'>
          <div style={{fontWeight:"bold"}}>{props.QApair.answers.length}</div>
          <div> 
          {props.QApair.answers.length > 1 ? (<div>answers</div>) : (<div>answer</div>)}
          </div>
        </span>
      </div>
      <h3 className='CTquestion'>{props.QApair.question}</h3>
      <button className='CTanswerButton'>Answer the question</button>
      <QAListAns firstAns={props.QApair.answers[0]} number={props.QApair.number} QApairs={props.QApairs}/>
    </div>
  )
}

export default QAListEntry;