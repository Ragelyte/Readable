import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import Comments from '../Comments';
import Post from '../Post';
import VotePost from "../VotePost";
import {closeEdit, deletePost, editPost, openEdit, redirectToHome} from "../../actions/index";

class PostView extends Component {
    constructor(props) {
        super(props);
        if (props.post !== undefined) {
            this.state = {
                title: props.post.title,
                body: props.post.body
            };
        }
        console.log('constructor', props.isDeleted)
    }

    redirectToHome = () => {
        this.props.redirectToHome();
    }

    deletePost = () => {
        this.props.deletePost(this.props.post.id);
    };

    editPost = () => {
        this.props.editPost(this.props.post.id, this.state.title, this.state.body);
        this.props.closeEdit();
    };

    onPostTitleChanged = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    onPostBodyChanged = (event) => {
        this.setState({
            body: event.target.value
        });
    }

    openEditPostForm = () => {
        this.props.openEdit();
    }


    componentWillReceiveProps = (newProps) => {
        if (this.props.post === undefined && newProps.post !== undefined) {
            this.setState({
                title: newProps.post.title,
                body: newProps.post.body
            });
        }
        if (newProps.isDeleted) {
            this.redirectToHome();
        }
        console.log('willmount', newProps.isDeleted)
    }

    render() {
        return (
            <div>
                {this.props.post === undefined ? (
                    null
                ) : (
                    <div className="column is-half is-offset-one-quarter">
                        <div className="box">
                            <div className="content">

                                {this.props.editPostFormOpen ? (
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        onChange={this.onPostTitleChanged}
                                        value={this.state.title}
                                    />
                                ) : (
                                    <h3>{this.props.post.title}</h3>
                                )}

                                {this.props.editPostFormOpen ? (
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        onChange={this.onPostBodyChanged}
                                        value={this.state.body}
                                    />
                                ) : (
                                    this.props.post.body
                                )}

                                {this.props.editPostFormOpen && (
                                    <a
                                        onClick={this.editPost}
                                        className="button is-light is-pulled-right is-small"
                                    >
                                        Save
                                    </a>
                                )}

                                <p>
                                    {this.props.post.category} &#8226;{' '}
                                    {moment(this.props.post.timestamp).format('MMMM Do YYYY')}{' '}
                                    &#8226; {this.props.post.author}
                                </p>
                            </div>

                            <div className="column">
                                <div className="level-left">

                                    <VotePost postId={this.props.post.id} voteScore={this.props.post.voteScore} />

                                    <div className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-comment"/>
                      {this.props.post.commentCount}
                  </span>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <Comments postId={this.props.post.id}/>
                        </div>
                    </div>
                )}

                <div className="column">
                    <a onClick={this.deletePost} className="button is-pulled-right">Delete</a>
                    <a onClick={this.openEditPostForm} className="button is-pulled-right">Edit</a>
                </div>
            </div>
        );

    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts.posts.find(
            post => post.id === ownProps.match.params.postId
        ),
        isDeleted : state.posts.loaded && state.posts.posts.find(post => post.id === ownProps.match.params.postId) === undefined,
        editPostFormOpen: state.posts.editPostFormOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        editPost: (commentId, title, body) =>
            dispatch(editPost(commentId, title, body)),
        openEdit: () => dispatch(openEdit()),
        closeEdit: () => dispatch(closeEdit()),
        redirectToHome: () => dispatch(redirectToHome())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
