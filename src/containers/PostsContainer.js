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
    allPosts: state.allPostsReducer.allPosts,
    isLoadingGetAllPosts: state.allPostsReducer.isLoadingGetAllPosts,
    getAllPostsError: state.allPostsReducer.getAllPostsError,
    deletePostError: state.allPostsReducer.deletePostError,
    addPostError: state.allPostsReducer.addPostError
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
