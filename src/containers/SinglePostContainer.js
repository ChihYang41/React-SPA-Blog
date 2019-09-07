import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SinglePost from '../components/single_post/SinglePost';
import { getSinglePost, deletePost, editPost } from '../action'

const SinglePostContainer = (props) => {
  return (<SinglePost {...props} />)
}

const mapStateToProps = (state) => {
  return {
    singlePost: state.singlePostReducer.singlePost,
    isLoading: state.singlePostReducer.isPostRequesting
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
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer));