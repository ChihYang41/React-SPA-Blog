import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Home from '../components/home/home';
import { GET_ALL_POSTS } from '../action';

const HomeContainer = (props) => {
  return (<Home {...props} />)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));