import React, {Component} from 'react';
import '../theme.css';
import '../App.css';
import {connect} from 'react-redux';
import {fetchCategories, fetchPost} from '../actions/index';
import Header from './Header';
import {Route, withRouter} from 'react-router';
import MainPageView from './views/MainPageView';
import CategoryView from './views/CategoryView';
import PostView from './views/PostView';

class App extends Component {
    componentWillMount() {
        this.props.fetchCategories();
        this.props.fetchPost();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Route path="/post/:postId" component={PostView}/>
                <Route exact path="/" component={MainPageView}/>
                <Route path="/category/:category" component={CategoryView}/>
                <Route path="/post/:id/comments" component={PostView}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // posts: state.posts.posts,
        // comments: state.comments.comments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPost: () => dispatch(fetchPost())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
