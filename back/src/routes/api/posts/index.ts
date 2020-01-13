import { Router } from "express";
import postsController from "./postsController";
const posts = Router();

//read
posts.get("/", postsController.readAllPosts);

export default posts;
