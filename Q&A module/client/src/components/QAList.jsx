import React from 'react';
import QAListEntry from './QAListEntry.jsx';

const QAList = (props) => (
  <div>
    { props.QApairs.map((QApair, index) => 
      <QAListEntry QApairs={props.QApairs} QApair={QApair} answerSubmit={props.answerSubmit} currentSelection={props.currentSelection} key={index}/>) }
  </div>
);

export default QAList;