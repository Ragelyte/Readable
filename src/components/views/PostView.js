import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import Comments from '../Comments';
import {deletePost, editPost} from '../../actions/index';
import Post from '../Post';

class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editPostFormOpen: false,
            title: '',
            body: ''
        };

        this.onPostTitleChanged = this.onPostTitleChanged.bind(this);
        this.onPostBodyChanged = this.onPostBodyChanged.bind(this);
    }

    onPostTitleChanged(event) {
        this.setState({
            title: event.target.value
        });
    }

    onPostBodyChanged(event) {
        this.setState({
            body: event.target.value
        });
    }

    deletePost = () => {
        this.props.deletePost(this.props.post.id);
    };

    editPost = () => {
        this.props.editPost(this.props.post.id, this.state.title, this.state.body);
        this.setState({
            editPostFormOpen: false
        });
    };

    openEditPostForm = () => {
        this.setState({
            editPostFormOpen: true,
            title: this.props.post.title,
            body: this.props.post.body
        });
    };

    render() {
        return (
            <div>
                {this.props.post === undefined ? (
                    'loading'
                ) : (
                    <div className="column is-half is-offset-one-quarter">
                        <div className="box">
                            <div className="content">
                                {this.state.editPostFormOpen ? (
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        onChange={this.onPostTitleChanged}
                                        value={this.state.title}
                                    />
                                ) : (
                                    <h3>{this.props.post.title}</h3>
                                )}

                                {this.state.editPostFormOpen ? (
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        onChange={this.onPostBodyChanged}
                                        value={this.state.body}
                                    />
                                ) : (
                                    this.props.post.body
                                )}

                                {this.state.editPostFormOpen && (
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
                                    <div className="level-item">
                    <span className="icon is-small">
                      <i className="fas fa-heart"/>
                        {this.props.post.voteScore}
                    </span>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <Comments postId={this.props.post.id}/>
                        </div>
                    </div>
                )}

                <div className="column ">
                    <a onClick={this.openEditPostForm} className="button is-pulled-right">
                        Edit
                    </a>
                    <a onClick={this.deletePost} className="button is-pulled-right">
                        Delete
                    </a>
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
        )
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        editPost: (commentId, title, body) =>
            dispatch(editPost(commentId, title, body))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
