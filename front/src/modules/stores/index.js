import { combineReducers } from "redux";
import post from "modules/stores/post";
import posts from "modules/stores/posts";
import write from "modules/stores/write";
import loading from "modules/stores/loading";
import comment from "modules/stores/comment";
import hashtags from "modules/stores/hashtags";
import likes from "modules/stores/likes";
import series from "modules/stores/series";

export default combineReducers({
  comment,
  hashtags,
  likes,
  write,
  post,
  posts,
  loading,
  series
});
