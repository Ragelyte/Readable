import React, {Component} from 'react';
import Post from '../Post';
import OrderBy from '../OrderBy';
import Subheader from '../Subheader';
import {connect} from 'react-redux';
import CreatePost from '../CreatePost';

class MainPageView extends Component {
    render() {
        return (
            <div>
                <Subheader title="All Categories"/>

                <OrderBy/>

                <div className="column is-centered">
                    {this.props.posts.map(post => {
                        return <Post key={post.id} post={post}/>;
                    })}
                </div>

                <CreatePost/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(MainPageView);
