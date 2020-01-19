import { Router } from "express";
import blogPostsController from "./blogPostsController";
const postsApi = Router();

//read
postsApi.get("/load/:category/tags", blogPostsController.loadTags);
//read
postsApi.get("/load/:category/series", blogPostsController.loadSeries);
//read
postsApi.get("/load/:category/:filter?", blogPostsController.loadAllPosts);
//read
postsApi.get("/load/:category/postsInTag", blogPostsController.loadPostsInTag);
export default postsApi;
