import { Router } from "express";
import { checkObjectId } from "lib/middlewares/checkObjectId";
import reCommentController from "./reCommentsController";

const reCommentApi = Router();

//read
reCommentApi.get("/load/:id", checkObjectId, reCommentController.loadComments);
//write
reCommentApi.post("/add/:id", checkObjectId, reCommentController.addComment);
//delete
reCommentApi.delete(
  "/delete/:id",
  checkObjectId,
  reCommentController.deleteComment
);

export default reCommentApi;
