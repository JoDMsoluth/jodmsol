import { createAction, handleActions } from "redux-actions";
import produce from "immer";

export const initialState = {};

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const LOAD_HASHTAG_REQUEST = "LOAD_HASHTAG_REQUEST";
export const LOAD_HASHTAG_SUCCESS = "LOAD_HASHTAG_SUCCESS";
export const LOAD_HASHTAG_FAILURE = "LOAD_HASHTAG_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_COMMENTS_REQUEST = "LOAD_COMMENTS_REQUEST";
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
export const LOAD_COMMENTS_FAILURE = "LOAD_COMMENTS_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const loadPosts = createAction(LOAD_POSTS_REQUEST);
export const loadHashTags = createAction(LOAD_HASHTAG_REQUEST);
export const uploadImg = createAction(UPLOAD_IMAGES_REQUEST);
export const removeImg = createAction(REMOVE_IMAGE);
export const addPost = createAction(ADD_POST_REQUEST);
export const likePost = createAction(LIKE_POST_REQUEST);
export const unlikePost = createAction(UNLIKE_POST_REQUEST);
export const addComment = createAction(ADD_COMMENT_REQUEST);
export const loadComments = createAction(LOAD_COMMENTS_REQUEST);
export const removePost = createAction(REMOVE_POST_REQUEST);
export const loadPost = createAction(LOAD_POST_REQUEST);

// 여기추가

export default handleActions(
  {
    [LOAD_POSTS_REQUEST]: (state, action) => produce(state, draft => {})
  },
  initialState
);
