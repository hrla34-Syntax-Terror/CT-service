import React from 'react';
import TermsAndConditions from './TermsAndConditions.jsx';
import moment from 'moment';
import axios from 'axios';

class AnswerAQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TCPopup: false,
      checkedTC: false,
      formCompleted: false,
      postQClicked: false,
      question: '',
      qNickname: '',
      qLocation: '',
      qEmail: '',
      qDate: '',
      questionBC: '',
      qNicknameBC: '',
      qLocationBC: '',
      qEmailBC: ''
    };

    this.showPopup = this.showPopup.bind(this);
    this.checkTCHidePopup = this.checkTCHidePopup.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
    this.setFormCompleted = this.setFormCompleted.bind(this);
  }

  showPopup() {
    this.setState({
      TCPopup: true
    });
  }

  checkTCHidePopup() {
    this.setState({
      checkedTC: true,
      TCPopup: false
    });
  }

  hidePopup() {
    this.setState({
      TCPopup: false
    });
  }

  toggleCheck() {
    this.setState({
      checkedTC: !this.state.checkedTC
    }, () => this.setFormCompleted());
  }

  changeHandler(e) {
    const { name, value } = e.target;
    if (name === 'qEmail' && value.includes('@')) {
      this.setState({
        qEmail: value,
        qEmailBC: 'black'
      }, () => this.setFormCompleted());
    }
    this.setState({
      [name]: value,
      [name + 'BC']: 'black',
      postQClicked: false
    }, () => this.setFormCompleted());
    if (value === '' && name !== 'qLocation' || (name === 'qEmail' && !value.includes('@'))) {
      this.setState({
        [name + 'BC']: ''
      }, () => this.setFormCompleted());
    }
  }

  componentDidMount() {
    this.getDate();
  }

  getDate() {
    const today = moment().utc().format();
    this.setState({
      qDate: today
    });
  }

  postAnswer() {
    this.setState({
      postQClicked: true
    });
    const {formCompleted, qNickname, answer, qDate, qEmail, qLocation} = this.state; 
    const {hideAnsPopup, answerSubmit, num} = this.props;
    if (formCompleted) {
      hideAnsPopup();
      answerSubmit();
      const newAns = {
        aNickname: qNickname,
        answer,
        aDate: qDate,
        aEmail: qEmail,
        aLocation: qLocation,
        yes: 0,
        no: 0,
        inappropriate: '',
        newAns: 'true'
      };
      const productID = Number(document.location.href.split('/')[3]);
      axios
        .put(`http://localhost:8005/api/${productID}`, {num, newAns})
        .then(console.log('posted'))
        .catch((err) => console.error(err));
      document.getElementById('ct-form').reset();
      this.setState({
        question: '',
        qNickname: '',
        qLocation: '',
        qEmail: '',
        qDate: ''
      });
    }
  }

  setFormCompleted() {
    const {questionBC, qNicknameBC, qEmailBC, checkedTC} = this.state;
    if (questionBC && qNicknameBC && qEmailBC && checkedTC) {
      this.setState({ formCompleted: true });
    } else {
      this.setState({ formCompleted: false });
    }
  }
  render() {
    const {postQClicked, questionBC, question, qNicknameBC, qNickname, qLocationBC, qEmailBC, qEmail, checkedTC, formCompleted, TCPopup} = this.state;
    return (
      <div className="ct-ans-q-main">
        <div id="ct-tiny-words" style={{marginBottom: -13, marginLeft: 8}}>Required fields are marked with *</div>
        <hr className="ct-hr2"/>
        <div className="ct-form">
          <div className="ct-form-askq-q">
            <div className="ct-ask-q-container">
              <span id="ct-q-title" style={{fontWeight: 'bold'}}>Answer*
                &nbsp;&nbsp;&nbsp;<span style={{fontWeight: 'normal'}}>Maximum of 255 characters.</span>
              </span>
              { postQClicked && !questionBC &&
                <span className="ct-q-required-box">
                  <span className="ct-q-required-container">
                    <span id="ct-req-content">
                      Required&nbsp;<span className="ct-q-required"></span>
                    </span>
                  </span>
                </span>
              }
              { question &&
                <div id="ct-check">
                  <span className="ct-q-checkmark-container">
                    <div className="ct-checkmark-sml">
                      <div className="ct-checkmark-sml-circle"></div>
                      <div className="ct-checkmark-sml-stem"></div>
                      <div className="ct-checkmark-sml-kick"></div>
                    </div>
                  </span>
                </div>
              }
            </div>
          </div>
          <form id="ct-form">
            <textarea className="ct-textarea" rows="4" cols="129" placeholder="Ask a question..." name="question" onChange={(e) => this.changeHandler(e)} style={{borderColor: questionBC}}></textarea>
            <hr className="ct-hr"/>
            <div className="ct-nickname-and-loc">
              <div className="ct-nickname-form" style={{fontWeight: 'bold'}}>
                <div id="ct-name-header"><span>Nickname*</span>
                  { postQClicked && !qNicknameBC &&
                    <span className="ct-name-required-container">
                      <span id="ct-req-content" style={{fontWeight: 'normal'}}>
                        Required&nbsp;<span className="ct-q-required"></span>
                      </span>
                    </span>
                  }
                  { qNickname &&
                    <span className="ct-q-check-container-name">
                      <span className="ct-checkmark-sml">
                        <div className="ct-checkmark-sml-circle"></div>
                        <div className="ct-checkmark-sml-stem"></div>
                        <div className="ct-checkmark-sml-kick"></div>
                      </span>
                    </span>
                  }
                </div>
                <div>
                  <input className="ct-q-input" placeholder="Example: jackie27" name="qNickname" onChange={(e) => this.changeHandler(e)} style={{borderColor: qNicknameBC}}></input>
                </div>
              </div>
              <div className="ct-location-form" style={{fontWeight: 'bold'}}>
                <div className="ct-loc-header">Location
                  { qLocationBC && 
                  <span className="ct-q-check-container-loc">
                    <span className="ct-checkmark-sml">
                      <div className="ct-checkmark-sml-circle"></div>
                      <div className="ct-checkmark-sml-stem"></div>
                      <div className="ct-checkmark-sml-kick"></div>
                    </span>
                  </span>
                  }
                </div>
                <div>
                  <input className="ct-q-input" placeholder="Example: Seattle, WA" name="qLocation" onChange={(e) => this.changeHandler(e)} style={{borderColor: qLocationBC}}></input>
                </div>
              </div>
            </div>
            <hr className="ct-hr"/>
            <div className="ct-email-form" style={{fontWeight: 'bold'}}>
              <div id="ct-name-header"><span>Email*</span>
                { postQClicked && !qEmailBC &&
                  <span className="ct-name-required-container">
                    <span id="ct-req-content" style={{fontWeight: 'normal'}}>
                    Required&nbsp;<span className="ct-q-required"></span>
                    </span>
                  </span>
                }
                { qEmail.includes('@') && qEmail.includes('.') && qEmail.includes('com') &&
                  <span className="ct-q-check-container-name">
                    <span className="ct-checkmark-sml">
                      <div className="ct-checkmark-sml-circle"></div>
                      <div className="ct-checkmark-sml-stem"></div>
                      <div className="ct-checkmark-sml-kick"></div>
                    </span>
                  </span>
                }
              </div>
              <div>
                <input className="ct-q-input-email" placeholder="Example: youremail@example.com" name="qEmail" onChange={(e) => this.changeHandler(e)} style={{borderColor: qEmailBC}}></input>
              </div>
            </div>
          </form>
        </div>
        <hr className="ct-hr3"/>
        <div id="ct-agree-to-tc-container"><a href="ct-agree-to-tc-container"></a>
          <input type="checkbox" style={{cursor: 'pointer'}} checked={checkedTC} onChange={this.toggleCheck}/>
          <span id="ct-agree">&nbsp;&nbsp;&nbsp;I agree to the <span id="ct-terms" onClick={() => this.showPopup()}>terms &amp; conditions</span></span>
          { postQClicked && !checkedTC &&
            <span className="ct-q-required-container-tc">
              <span id="ct-req-content">
                Required&nbsp;<span className="ct-q-required"></span>
              </span>
            </span>
          }
          { checkedTC &&
            <span className="ct-check-container-tc">
              <span className="ct-checkmark-sml">
                <div className="ct-checkmark-sml-circle"></div>
                <div className="ct-checkmark-sml-stem"></div>
                <div className="ct-checkmark-sml-kick"></div>
              </span>
            </span>
          }
        </div>
        <div id="ct-tiny-words">&nbsp;You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</div>
        { formCompleted ? (
          <a href="#ct-qa-container"><button className="ct-blue-btn" id="ct-submit-form" onClick={() => this.postAnswer()}>Post Answer</button></a>
        ) : (
          <button className="ct-blue-btn" id="ct-submit-form" onClick={() => this.postAnswer()}>Post Answer</button>
        ) }
        { TCPopup &&
          <TermsAndConditions checkTCHidePopup={this.checkTCHidePopup} hidePopup={this.hidePopup}/>
        }
      </div>
    );
  }
}

export default AnswerAQuestion;