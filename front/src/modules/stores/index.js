import { combineReducers } from 'redux';
import post from 'modules/stores/post';
import posts from 'modules/stores/posts';
import write from 'modules/stores/write';
import loading from 'modules/stores/loading';
import comment from 'modules/stores/comment';
import hashtags from 'modules/stores/hashtags';
import series from 'modules/stores/series';
import views from 'modules/stores/views';
import project from 'modules/stores/project';

export default combineReducers({
  comment,
  hashtags,
  write,
  post,
  posts,
  loading,
  series,
  views,
  project,
});
