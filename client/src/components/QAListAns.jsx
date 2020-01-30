import React from 'react';
import moment from 'moment';


class QAListAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: this.props.firstAns.yes,
      no: this.props.firstAns.no,
      upVoted: false,
      reported: false
    }
    this.upVote = this.upVote.bind(this);
    this.reported = this.reported.bind(this);
  }

  upVote(e) {
    console.log(e.target.getAttribute('name'))
    this.setState({
      [e.target.getAttribute('name')]: this.state[e.target.getAttribute('name')] + 1,
      upVoted: true
    })
  }

  reported() {
    this.setState({
      reported: true
    })
  }

  render() {
    return (
      <div>
        <span className='CTansNickname'>{this.props.firstAns.aNickname}&nbsp;</span>
        <span>·</span>&nbsp;<span id='CTsmallFont'>{moment(this.props.firstAns.aDate, 'MMDDYYYY').fromNow()}</span>
        <div className='CTanswer'>{this.props.firstAns.answer}</div>
        <div className='CThelpfulQuestion' id='CTsmallFont'>Helpful?&nbsp;&nbsp;
          { this.state.upVoted ? (
            <span>
              <span className='CThelpfulClicked' name='yes'>Yes&nbsp;·&nbsp;<span style={{color:'green'}}>{this.state.yes}</span></span>&nbsp;
              <span className='CThelpfulClicked' name='no'>No&nbsp;·&nbsp;<span style={{color:'red'}}>{this.state.no}</span></span>&nbsp;
            </span>
          ) : (
            <span>
              <span onClick={(e) => this.upVote(e)} name='yes' className='CThelpful'>Yes&nbsp;·&nbsp;{this.state.yes}</span>&nbsp;
              <span onClick={(e) => this.upVote(e)} name='no' className='CThelpful'>No&nbsp;·&nbsp;{this.state.no}</span>&nbsp;
            </span>
          ) }
          { this.state.reported ? (
            <span className='CTReported'>Reported</span>
          ) : (
            <span onClick={() => this.reported()} className='CTinappropriate'>Report as inappropriate</span>
          ) }
        </div>
        { this.props.QApairs.length === this.props.number ? (<div/>) : (<hr/>) }
      </div>
    )
  }
}

export default QAListAns;