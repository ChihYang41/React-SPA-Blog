import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './bootstrap.min.css'
import './App.css';
import BlogNavbar from './nav/nav.js';
import About from './about/about.js';
import Home from './home/home.js';
import Posts from './post/post.js';
import SinglePost from './single_post/SinglePost.js'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <BlogNavbar/>
          <div className="main-page">
            <Route exact path="/React-SPA-Blog/" component={Home} />
            <Route exact path="/React-SPA-Blog/posts" component={Posts} />
            <Route path="/React-SPA-Blog/about" component={About} />
            <Route path="/React-SPA-Blog/posts/:id" component={SinglePost} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;