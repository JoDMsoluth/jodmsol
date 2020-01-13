import { Router } from "express";
import postController from "./postController";
import { checkObjectId } from "middlewares/checkObjectId";
const post = Router();

//read
post.get("/load/:id", checkObjectId, postController.readPost);
//write
post.post("/add", checkObjectId, postController.writePost);
//delete
post.delete("/delte/:id", checkObjectId, postController.deletePost);
//update
post.patch("/update/:id", checkObjectId, postController.updatePost);

export default post;
