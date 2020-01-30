import React from 'react';

var AskAQuestion = () => {
  return (
    <div>
      <div>Ask a Question</div>
      <div>Required fields are marked with *</div>
      <hr/>
      <div>Question*</div>
      <div>Maximum of 255 characters.</div>
      <textarea placeholder='Ask a question...'></textarea>
      <hr/>
      <div>Nickname*</div>
      <input placeholder='Example: jackie27'></input>
      <hr/>
      <div>Location</div>
      <input placeholder='Example: Seattle, WA'></input>
      <hr/>
      <div>Email*</div>
      <input placeholder='Example: youremail@example.com'></input>
      <hr/>
      <div>I agree to the terms &amp; conditions</div>
      <div>You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</div>
      <button>Post question</button>
    </div>
  );
};

export default AskAQuestion;