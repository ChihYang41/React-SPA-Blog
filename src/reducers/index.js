import { combineReducers } from 'redux';
import postsReducer from './posts';
import homeReducer from './home';

const reducer = combineReducers({
  posts: postsReducer,
  home: homeReducer
})

export default reducer