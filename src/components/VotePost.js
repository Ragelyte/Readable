import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePostVotescore } from '../actions/index';

class VotePost extends Component {
  render() {
    return (
      <div>
        <a onClick={this.props.voteForPost}>
          <span className="icon is-small">
            <i className="fas fa-thumbs-up" />
            {this.props.post.voteScore > 0 && this.props.post.voteScore}
          </span>
        </a>

        <a onClick={this.props.downvoteForPost}>
          <span className="icon is-small">
            <i className="fas fa-thumbs-down" />
            {this.props.post.voteScore < 0 && this.props.post.voteScore}
          </span>
        </a>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts.posts.find(post => post.id === ownProps.postId)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    voteForPost: () => dispatch(changePostVotescore(ownProps.postId, 'upVote')),
    downvoteForPost: () =>
      dispatch(changePostVotescore(ownProps.postId, 'downVote'))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePost);
