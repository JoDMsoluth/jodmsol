import { Router } from "express";
import postsController from "./postsController";
const posts = Router();

//read
posts.get("/load/:category/tags", postsController.loadAllPosts);
//read
posts.get("/load/:category/series", postsController.loadAllPosts);
//read
posts.get("/load/:category/:filter", postsController.loadAllPosts);

export default posts;
