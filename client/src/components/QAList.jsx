import React from 'react';
import QAListEntry from './QAListEntry.jsx';

var QAList = (props) => {
  return (
    <div>
      { props.QApairs.map((QApair, index) => <QAListEntry QApair={QApair} key={index}/>) }
    </div>
  )
}
export default QAList;