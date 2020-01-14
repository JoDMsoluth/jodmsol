import { Router } from "express";
import postController from "./postController";
import { checkObjectId } from "lib/middlewares/checkObjectId";
const post = Router();

//read
post.get("/load/:id", checkObjectId, postController.loadPost);
//write
post.post("/add", postController.addPost);
//delete
post.delete("/delte/:id", checkObjectId, postController.deletePost);
//update
post.patch("/update/:id", checkObjectId, postController.updatePost);

export default post;
