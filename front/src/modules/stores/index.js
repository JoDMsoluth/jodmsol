import { combineReducers } from "redux";
import posts from "src/modules/stores/posts";
import write from "src/modules/stores/write";
import loading from "src/modules/stores/loading";

export default combineReducers({
  write,
  posts,
  loading
});
