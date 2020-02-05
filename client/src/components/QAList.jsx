import React from 'react';
import QAListEntry from './QAListEntry.jsx';

var QAList = (props) => {
  return (
    <div>
      { props.QApairs.map((QApair, index) => <QAListEntry QApairs={props.QApairs} QApair={QApair} answerSubmit={props.answerSubmit} currentSelection={props.currentSelection} key={index}/>) }
    </div>
  )
}
export default QAList;