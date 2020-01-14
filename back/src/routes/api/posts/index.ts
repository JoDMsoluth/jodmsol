import { Router } from "express";
import postsController from "./postsController";
const posts = Router();

//read
posts.get("/load", postsController.loadAllPosts);

export default posts;
