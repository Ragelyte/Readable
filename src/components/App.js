import React, { Component } from 'react';
import '../theme.css';
import '../App.css';
import { connect } from 'react-redux';
import { fetchCategories, fetchPost } from '../actions/index';
import Header from './Header';
import { Route, Switch, withRouter } from 'react-router';
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
        <Header />
        <Switch>
          <Route exact path="/" component={MainPageView} />
          <Route path="/category/:category" component={CategoryView} />
          <Route path="/:category/:postId" component={PostView} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPost: () => dispatch(fetchPost())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
