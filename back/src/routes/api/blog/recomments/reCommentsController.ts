import { Request, Response, json } from "express";
import Joi from "joi";
import CommentCollection from "models/comments/CommentsCollection";
import ReCommentsCollection from "models/reComments/ReCommentsCollection";
import ReCommentsDocument from "models/reComments/ReCommentsDocument";

async function loadComments(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await CommentCollection.findById(id)
      .populate("childId")
      .exec(function(err, comments) {
        if (err) console.error(err);
        res.json(comments);
      });
  } catch (e) {
    console.error(e);
  }
}

async function addComment(req: Request, res: Response) {
  const schema: Joi.ObjectSchema = Joi.object().keys({
    userId: Joi.string().required(),
    password: Joi.string().required(),
    content: Joi.string().required()
  });
  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send(joiResult.error);
    console.log(joiResult.error);
    return;
  }

  const { id } = req.params;
  const { userId, password, content } = req.body;

  try {
    await CommentCollection.findById(id)
      .populate("childId")
      .exec(function(err, target) {
        if (err) console.error(err);
        if (target) {
          const newComment: ReCommentsDocument = new ReCommentsCollection({
            userId,
            password,
            content
          });
          target.childId.push(newComment._id);
          target.save();
          newComment.save();
          res.json(newComment);
        }
      });
  } catch (e) {
    console.log(e);
  }
}

async function deleteComment(req: Request, res: Response) {
  const { id } = req.params;
  try {
    console.log(id);
    await ReCommentsCollection.findByIdAndRemove(id, function(err, result) {
      if (err) console.error(err);
      res.status(204).send("success"); // No Content
    });
  } catch (e) {
    console.error(e);
  }
}

const reCommentController = {
  addComment,
  deleteComment,
  loadComments
};

export default reCommentController;
