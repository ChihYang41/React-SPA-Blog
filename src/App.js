import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import './bootstrap.min.css'
import './App.css';
import BlogNavbar from './components/nav/nav.js';
import NewPost from './containers/NewPostContainer.js';
import Home from './containers/HomeContainer.js';
import Posts from './containers/PostsContainer.js';
import SinglePost from './containers/SinglePostContainer.js';
import AlertDismissible from './components/utils/Alert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  render() {
    const { globalMessage } = this.props;
    console.log(this.props)
    return (
      <Router basename="/React-SPA-Blog">
        <div className="App">
          <BlogNavbar/>
          <div className="main-page">
            { globalMessage ? <AlertDismissible alertTitle={globalMessage} alertType={"success"} /> : null}
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/newPost" component={NewPost} />
            <Route path="/posts/:id" component={SinglePost} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    globalMessage: state.posts.globalMessage
  }
}

export default connect(mapStateToProps, null)(App);
