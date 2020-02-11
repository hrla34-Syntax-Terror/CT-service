import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';


class QAListAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: this.props.firstAns.yes,
      no: this.props.firstAns.no,
      report: 'Report as inappropriate',
      helpfulClass: 'ct-helpful',
      colorR: '',
      colorG: '',
      reportClass: 'ct-inappropriate'
    }
    this.upVote = this.upVote.bind(this);
    this.reported = this.reported.bind(this);
  }

  upVote(e) {
    console.log(e.target)
    if (this.state.helpfulClass === 'ct-helpful') {
      this.setState({
        [e.target.getAttribute('name')]: this.state[e.target.getAttribute('name')] + 1,
        helpfulClass: 'ct-helpful-clicked',
        colorR: 'red',
        colorG: 'green'
      })
    }
  }

  reported() {
    this.setState({
      report: 'Reported',
      reportClass: 'ct-reported'
    })
  }

  render() {
    return (
      <div>
        <span className='ct-ans-list-nickname'>{this.props.firstAns.aNickname}&nbsp;</span>
        <span>·</span>&nbsp;<span id='ct-small-font'>{moment.tz(this.props.firstAns.aDate, 'America/Los_Angeles').fromNow()}</span>
        <div className='ct-answer'>{this.props.firstAns.answer}</div>
        <div className='ct-ans-feedback'>
          <div className='ct-if-helpful' id='ct-small-font'>Helpful?&nbsp;&nbsp;</div>
          <div className='ct-yesno-box'>
            <span onClick={(e) => this.upVote(e)}>
              <span name='yes' className={this.state.helpfulClass}>Yes&nbsp;·&nbsp;
                <span name='yes' style={{color:this.state.colorG}}>{this.state.yes}</span>
              </span>&nbsp;
            </span>
            <span onClick={(e) => this.upVote(e)}>
              <span name='no' className={this.state.helpfulClass}>No&nbsp;·&nbsp;
                <span name='no'style={{color:this.state.colorR}}>{this.state.no}</span>
              </span>&nbsp;
            </span>
            <span onClick={() => this.reported()} className={this.state.reportClass}>{this.state.report}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default QAListAns;