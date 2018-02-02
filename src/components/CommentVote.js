import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeCommentVotescore} from "../actions/index";

class CommentVote extends Component {

    render() {
        return (
            <div>
                <a onClick={this.props.voteForComment}>
                <span className="icon is-small">
                    <i className="fas fa-thumbs-up"/>
                    {this.props.comment.voteScore > 0 && this.props.comment.voteScore}
                </span>
                </a>

                <a onClick={this.props.downvoteForComment}>
                <span className="icon is-small">
                    <i className="fas fa-thumbs-down"/>
                    {this.props.comment.voteScore < 0 && this.props.comment.voteScore}
                </span>
                </a>
            </div>


        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        comment: state.comments.comments.find(
            comment => comment.id === ownProps.commentId
        )
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        voteForComment: () => dispatch(changeCommentVotescore(ownProps.commentId, 'upVote')),
        downvoteForComment: () => dispatch(changeCommentVotescore(ownProps.commentId, 'downVote'))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentVote);