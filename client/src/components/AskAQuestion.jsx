import React from 'react';
import TermsAndConditions from './TermsAndConditions.jsx';

class AskAQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TCPopup: false,
      checkedTC: false
    }
    this.showPopup = this.showPopup.bind(this);
    this.checkTCHidePopup = this.checkTCHidePopup.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  showPopup() {
    this.setState({
      TCPopup: true
    })
  }

  checkTCHidePopup() {
    this.setState({
      checkedTC: true,
      TCPopup: false
    })
  }

  toggleCheck() {
    this.setState({
      checkedTC: !this.state.checkedTC
    })
  }

  render() {

    return (
      <div>
        <h2 className='CTQandA' id='CTaskQTitle'>Ask a Question</h2> 
        <button id='CTxButton'><div id='CTxFont'>&#x2715;</div></button>
        <div id='CTtinyWords' style={{marginBottom: -13, marginLeft: 8}}>Required fields are marked with *</div>
        <hr/>
        <div className='CTqForm'>
          <div>Question*
          &nbsp;&nbsp;&nbsp;<span>Maximum of 255 characters.</span>
          </div>
          <textarea className='CTqTextArea' rows='4' cols='129' placeholder='Ask a question...'></textarea>
          <hr/>
          <div className='CTnicknameAndLoc'>
            <div className='CTnicknameQ'>Nickname*
              <div>
                <input className='CTqInput' placeholder='Example: jackie27'></input>
              </div>
            </div>
            <div className='CTlocationQ'>Location
              <div>
                <input className='CTqInput' placeholder='Example: Seattle, WA'></input>
              </div>
            </div>
          </div>
          <hr/>
          <div>Email*</div>
          <input className='CTqInput' placeholder='Example: youremail@example.com'></input>
        </div>
        <hr/>
        <div id='CTagreeToTCContainer'><a href='CTagreeToTCContainer'></a>
          <input type='checkbox' style={{cursor:'pointer'}} checked={this.state.checkedTC} onChange={this.toggleCheck}/><span id='CTiAgree'>&nbsp;&nbsp;&nbsp;I agree to the <a href='#CTqaContainer'><span id='CTterms' onClick={() => this.showPopup()}>terms &amp; conditions</span></a></span>
        </div>
        <div id='CTtinyWords'>&nbsp;You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</div>
        <button className='CTaskAQuestion' id='CTpostQuestion'>Post question</button>
        { this.state.TCPopup ? (
          <TermsAndConditions checkTCHidePopup={this.checkTCHidePopup}/>
        ) : (<div/>) }
      </div>
    );
  }
}

export default AskAQuestion;