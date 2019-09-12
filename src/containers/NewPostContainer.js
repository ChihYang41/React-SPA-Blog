import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPost from '../components/write_post/NewPost';
import { addPost } from '../action'

const NewPostContainer = (props) => {
  return (<NewPost {...props} />)
}

const mapStateToProps = (state) => {
  return {
    isLoadingAddPost: state.allPostsReducer.isLoadingAddPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (author, title, body)  => {
      dispatch(addPost(author, title, body))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostContainer));