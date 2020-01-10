import { combineReducers } from "redux";
import posts from "src/modules/stores/posts";
import write from "src/modules/stores/write";

export default combineReducers({
  write,
  posts
});
