import React from 'react';
import moment from 'moment';


class QAListAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: this.props.firstAns.yes,
      no: this.props.firstAns.no,
      upVoted: false
    }
    this.upVote = this.upVote.bind(this);
  }

  upVote(e) {
    this.setState({
      [e.target.name]: this.state[e.target.name] + 1,
      upVoted: true
    })
  }

  render() {
    return (
      <div>
        <span className='CTansNickname'>{this.props.firstAns.aNickname}&nbsp;</span>
        <span>·</span>&nbsp;<span id='CTsmallFont'>{moment(this.props.firstAns.aDate, 'MMDDYYYY').fromNow()}</span>
        <div className='CTanswer'>{this.props.firstAns.answer}</div>
        <div id='CTsmallFont'>Helpful?&nbsp;&nbsp;
          { this.upVoted ? (
            <div>
              <div>worked</div>
              <span>Yes&nbsp;<span>·</span>&nbsp;{this.state.yes}</span>&nbsp;
              <span>No&nbsp;<span>·</span>&nbsp;{this.state.no}</span>&nbsp;
            </div>
          ) : (
            <div>
              <button onClick={(e) => this.upVote(e)} name='yes' className='CThelpful'>Yes&nbsp;<span>·</span>&nbsp;{this.state.yes}</button>&nbsp;
              <button onClick={(e) => this.upVote(e)} name='no' className='CThelpful'>No&nbsp;<span>·</span>&nbsp;{this.state.no}</button>&nbsp;
            </div>
          ) }
          <button className='CTinappropriate'>Report as inappropriate</button>
        </div>
        <hr/>
      </div>
    )
  }
}

export default QAListAns;