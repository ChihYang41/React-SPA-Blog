import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SinglePost from '../components/single_post/SinglePost';
import { getSinglePost, deletePost, editPost, setMessage } from '../action'

const SinglePostContainer = (props) => {
  return (<SinglePost {...props} />)
}

const mapStateToProps = (state) => {
  return {
    singlePost: state.posts.singlePost,
    isLoadingPost: state.posts.isPostRequesting,
    isLoadingDeletePost: state.posts.isLoadingDeletePost,
    isLoadingEditPost: state.posts.isLoadingEditPost,
    editPostError: state.posts.editPostError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: id => {
      dispatch(deletePost(id))
    },

    editPost: (id, author, title, body) => {
      dispatch(editPost(id, author, title, body))
    },

    getSinglePost: id => {
      dispatch(getSinglePost(id))
    },

    setMessage: message => {
      dispatch(setMessage(message))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer));