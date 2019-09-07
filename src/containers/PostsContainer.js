import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Posts from '../components/post/post';
import { getAllPosts } from '../action'

const PostsContainer = (props) => {
  return (<Posts {...props} />)
}

const mapStateToProps = (state) => {
  return {
    allPosts: state.AllPostsReducer.allPosts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => {
      dispatch(getAllPosts())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));