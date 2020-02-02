import { Router } from "express";
import blogPostsController from "./blogPostsController";
import { checkObjectId } from "lib/middlewares/checkObjectId";
const postsApi = Router();

//read
postsApi.get("/load/:category/series", blogPostsController.loadSeriesPosts);
//read
postsApi.get("/load/:category/tags", blogPostsController.loadTags);
//read
postsApi.get("/load/:category/:filter?", blogPostsController.loadAllPosts);
//read
postsApi.get("/load/:category/tags/:tag", blogPostsController.loadPostsInTag);

export default postsApi;
