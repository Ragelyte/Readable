import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const Post = ({post}) => {

    return (
        <div className="column is-half is-offset-one-quarter">
            <div className="box">
                <div className="media-content">
                    <div key={post.id} className="card-header">
                        <NavLink to={'/post/' + post.id}>
                            <strong>{post.title}</strong>
                            <small>@{post.author}</small>
                        </NavLink>
                    </div>
                </div>
                <div className="media-content">
                    {post.body}
                    <div className="column">
                        <div className="level-left">
                            <div className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-heart"/>
                      {post.voteScore}
                  </span>
                            </div>
                            <div className="level-item">
                  <span className="icon is-small">
                    <i className="fas fa-comment"/>
                      {post.commentCount}
                  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
