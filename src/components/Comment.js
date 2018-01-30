import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {deleteComment, editComment} from "../actions/index";
import moment from "moment";
import {connect} from "react-redux";

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editCommentFormOpen: false,
            body: props.comment.body
        };

        this.onCommentBodyChanged = this.onCommentBodyChanged.bind(this)
    }

    onCommentBodyChanged (event) {
        this.setState({
            body: event.target.value
        })
    }

    deleteComment = () => {
        this.props.deleteComment(this.props.comment.parentId, this.props.comment.id);
    }

    editComment = () => {
        this.props.editComment(this.props.comment.id, this.state.body)
        this.setState({
            editCommentFormOpen: false
        })
    }

    openEditCommentForm = () => {
        this.setState({
            editCommentFormOpen: true
        })
    }

    render() {
        return (
            <div className="box">
                <a onClick={this.deleteComment}
                   className="delete is-light is-pulled-right">gbgbv</a>
                <p>

                    {
                       ! this.state.editCommentFormOpen &&

                        <a onClick={this.openEditCommentForm} className="is-pulled-left">
                            <span className="icon is-small"><i className="fas fa-edit"></i></span>
                        </a>

                    }


                    {
                        this.state.editCommentFormOpen ?
                            <input
                                 className="input is-rounded"
                                 type="text"
                                 value={this.state.body}
                                 onChange={this.onCommentBodyChanged}
                                 onKeyPress={event => {
                                     if (event.key === 'Enter') {
                                         this.editComment();
                                     }
                                 }}
                            />
                            :

                            this.props.comment.body

                    }

                </p>
                <p>{moment(this.props.comment.timestamp).format("ddd, hA")}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),
        editComment: (commentId, body) => dispatch(editComment(commentId, body))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);