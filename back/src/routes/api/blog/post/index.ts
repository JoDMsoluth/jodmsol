import { Router } from "express";
import blogPostController from "./blogPostController";
import { checkObjectId } from "lib/middlewares/checkObjectId";
const postApi = Router();

//read
postApi.get("/load/:id", checkObjectId, blogPostController.loadPost);
//write
postApi.post("/add/:category/:id", checkObjectId, blogPostController.addPost);
//delete
postApi.delete("/delete/:id", checkObjectId, blogPostController.deletePost);
//update
postApi.patch("/update/:id", checkObjectId, blogPostController.updatePost);
//like
postApi.get("/like/:id", checkObjectId, blogPostController.likePost);
//unlike
postApi.get("/unlike/:id", checkObjectId, blogPostController.unlikePost);

export default postApi;
