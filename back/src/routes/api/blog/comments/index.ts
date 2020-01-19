import { Router } from "express";
import commentsController from "./commentsController";
import { checkObjectId } from "lib/middlewares/checkObjectId";
const commentApi = Router();

//read
commentApi.get(
  "/load/:id",
  checkObjectId,
  commentsController.loadReplyComments
);
//write
commentApi.post("/add/:id", checkObjectId, commentsController.addComment);
//delete
commentApi.delete(
  "/delete/:id",
  checkObjectId,
  commentsController.deleteComment
);
//update
commentApi.patch(
  "/update/:id",
  checkObjectId,
  commentsController.updateComment
);

export default commentApi;
