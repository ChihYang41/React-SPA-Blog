import { GET_ALL_POSTS, ADD_POST, DELETE_POST, GET_SINGLE_POST, EDIT_POST } from '../action';

const initState = {
  allPosts: [],
  singlePost: {},
  isPostRequesting: false,
  isLoadingGetAllPosts: false,
  isLoadingDeletePost: false,
  isLoadingAddPost: false,
  isLoadingEditPost: false,
  getAllPostsError: null,
  deletePostError: null,
  addPostError: null,
  editPostError: null,
  globalMessage: null
};

// reducers
export default function postsReducer(state = initState, action) {
  switch (action.type) {
    case `${GET_ALL_POSTS}_PENDING`:
      return {
        ...state,
        isLoadingGetAllPosts: true,
        getAllPostsError: null,
      }
    case `${GET_ALL_POSTS}_FULFILLED`:
      return {
        ...state,
        allPosts: action.payload.data,
        isLoadingGetAllPosts: false,
      }
    case `${GET_ALL_POSTS}_REJECTED`:
      return {
        ...state,
        isLoadingGetAllPosts: false,
        getAllPostsError: action.error
      }
    case `${ADD_POST}_PENDING`:
      return {
        ...state,
        isLoadingAddPost: true,
        addPostError: null,
        globalMessage: null
      }
    case `${ADD_POST}_FULFILLED`:
      return {
        ...state,
        isLoadingAddPost: false
      }
    case `${ADD_POST}_REJECTED`:
      return {
        ...state,
        isLoadingGetAllPosts: false,
        addPostError: action.error
      }
    case `${DELETE_POST}_PENDING`:
      return {
        ...state,
        isLoadingDeletePost: true,
        deletePostError: null,
        globalMessage: null
      }
    case `${DELETE_POST}_FULFILLED`:
      return {
        ...state,
        isLoadingDeletePost: false,
      }
    case `${DELETE_POST}_REJECTED`:
      return {
        ...state,
        isLoadingDeletePost: false,
        deletePostError: action.error
      }
    case `${GET_SINGLE_POST}_PENDING`:
      return {
        ...state,
        isPostRequesting: true,
      }
    case `${GET_SINGLE_POST}_FULFILLED`:
      return {
        ...state,
        singlePost: action.payload.data,
        isPostRequesting: false
      }
    case `${GET_SINGLE_POST}_REJECTED`:
      return {
        ...state,
        isPostRequesting: false,
      }
    case `${EDIT_POST}_PENDING`:
      return {
        ...state,
        isLoadingEditPost: true,
        editPostError: null,
        globalMessage: null
      }
    case `${EDIT_POST}_FULFILLED`:
      return {
        ...state,
        singlePost: action.payload.data,
        isLoadingEditPost: false
      }
    case `${EDIT_POST}_REJECTED`:
      return {
        ...state,
        isLoadingEditPost: false,
        editPostError: action.error
      }
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        globalMessage: action.message
      }
    default:
      return state
  }
}
