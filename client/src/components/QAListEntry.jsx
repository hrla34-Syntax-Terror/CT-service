import React from 'react';
import QAListAns from './QAListAns.jsx';

var QAListEntry = (props) => {
  return (
    <div className='listEntry'>
      <div className='user'>
        <span className='nickname'>{props.QApair.qNickname}&nbsp;</span>
        <span>·</span>&nbsp;<span id='smallFont'>1 year ago</span>
      </div>
      <h3>{props.QApair.question}</h3>
      <button className='answerButton'>Answer the question</button>
      {props.QApair.answers.map((answer, index) => <QAListAns answer={answer} key={index}/>)}
    </div>
  )
}

export default QAListEntry;