import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import VotePost from './VotePost';
import { connect } from 'react-redux';
import { deletePost, redirectToEdit } from '../actions/index';

class Post extends Component {
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
  };

  redirectToEdit = () => {
    this.props.redirectToEdit(this.props.post);
  };

  render() {
    return (
      <div className="column is-half is-offset-one-quarter">
        <div className="box">
          <div className="media-content">
            <a onClick={this.deletePost} className="delete is-pulled-right" />
            <a onClick={this.redirectToEdit} className="is-pulled-right">
              <span className="icon is-small">
                <i className="fas fa-edit" />
              </span>
            </a>
            <div key={this.props.post.id} className="card-header">
              <NavLink
                to={'/' + this.props.post.category + '/' + this.props.post.id}
              >
                <strong>{this.props.post.title}</strong>
                <small>@{this.props.post.author}</small>
              </NavLink>
            </div>
          </div>
          <div className="media-content">
            {this.props.post.body}
            <div className="column">
              <div className="level-left">
                <div className="level-item">
                  <VotePost
                    postId={this.props.post.id}
                    voteScore={this.props.post.voteScore}
                  />
                </div>
                <div className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-comment" />
                    {this.props.post.commentCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: postId => dispatch(deletePost(postId)),
    redirectToEdit: post => dispatch(redirectToEdit(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
