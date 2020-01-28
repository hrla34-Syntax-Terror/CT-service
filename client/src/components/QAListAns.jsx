import React from 'react';

var QAListAns = (props) => {
  return (
    <div>
      <div className='nickname'>{props.answer.aNickname}</div>
      <div>{props.answer.answer}</div>
      <div id='smallFont'>Helpful?&nbsp;&nbsp;
        <button className='helpful'>Yes&nbsp;<span>·</span>&nbsp;0</button>&nbsp;
        <button className='helpful'>No&nbsp;<span>·</span>&nbsp;0</button>&nbsp;
        <button className='inappropriate'>Report as inappropriate</button>
      </div>
      <hr/>
    </div>
  )
}

export default QAListAns;