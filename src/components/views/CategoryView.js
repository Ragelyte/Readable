import React, { Component } from 'react';
import Post from '../Post';
import OrderBy from '../OrderBy';
import Subheader from '../Subheader';
import { connect } from 'react-redux';
import CreatePost from '../CreatePost';

class CategoryView extends Component {
  render() {
    return (
      <div>
        <Subheader title={this.props.match.params.category} />
        <br />
        <OrderBy />
        <div className="column">
          {this.props.posts
            .filter(post => post.category === this.props.match.params.category)
            .map(post => {
              return <Post key={post.id} post={post} />;
            })}
        </div>

        <CreatePost />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  };
}

export default connect(mapStateToProps)(CategoryView);
