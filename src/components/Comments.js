import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addComment, fetchComment} from '../actions/index';
import {connect} from 'react-redux';
import Comment from './Comment';

class Comments extends Component {
    state = {
        comment: ''
    };

    componentWillMount() {
        this.props.fetchComments(this.props.postId);
    }

    addComment = () => {
        this.props.addComment({
            author: 'asgasgsa',
            body: this.state.comment,
            parentId: this.props.postId,
            timestamp: Math.floor(Date.now() / 1000),
            id: Math.random()
                .toString(36)
                .substr(2, 10)
        });
        this.setState({
            comment: ''
        });
    };

    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment}/>;
                })}

                <input
                    onChange={event => {
                        this.setState({comment: event.target.value});
                    }}
                    className="input is-rounded"
                    type="text"
                    placeholder="Write a comment..."
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.addComment();
                        }
                    }}
                    value={this.state.comment}
                />
            </div>
        );
    }
}

Comments.propTypes = {
    postId: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        comments: state.comments.comments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchComments: id => dispatch(fetchComment(id)),
        addComment: comment => dispatch(addComment(comment))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
