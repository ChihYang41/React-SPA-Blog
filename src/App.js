import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './bootstrap.min.css'
import './App.css';
import BlogNavbar from './components/nav/nav.js';
import NewPostContainer from './containers/NewPostContainer.js';
import HomeCotainer from './containers/HomeContainer.js';
import PostsContainer from './containers/PostsContainer.js';
import SinglePostContainer from './containers/SinglePostContainer.js'

class App extends Component {
  render() {
    return (
      <Router basename="/React-SPA-Blog">
        <div className="App">
          <BlogNavbar/>
          <div className="main-page">
            <Route exact path="/" component={HomeCotainer} />
            <Route exact path="/posts" component={PostsContainer} />
            <Route path="/newPost" component={NewPostContainer} />
            <Route path="/posts/:id" component={SinglePostContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
