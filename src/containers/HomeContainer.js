import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Home from '../components/home/home';
import { getLatestPosts } from '../action';

const HomeContainer = (props) => {
  return (<Home {...props} />)
}

const mapStateToProps = (state) => {
  return {
    latestTenPosts: state.home.latestTenPosts,
    isLoadingGetLatestPosts: state.home.isLoadingGetLatestPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestPosts: () => {
      dispatch(getLatestPosts())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));