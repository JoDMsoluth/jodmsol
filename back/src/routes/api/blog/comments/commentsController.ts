import { Request, Response } from "express";
import Joi from "joi";
import CommentDocument from "models/comments/CommentsDocument";
import CommentCollection from "models/comments/CommentsCollection";
import BlogPostCollection from "models/blogPost/BlogPostCollection";

async function loadComments(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await BlogPostCollection.findById(id)
      .populate("comments")
      .select("comments")
      .exec(function(err, comments) {
        if (err) console.error(err);
        res.json(comments && comments.comments);
      });
  } catch (err) {
    console.error(err);
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
    await BlogPostCollection.findById(id)
      .populate({ path: "comments" })
      .exec(function(err, target) {
        if (err) console.error(err);
        if (target) {
          const newComment: CommentDocument = new CommentCollection({
            userId,
            password,
            content
          });
          target.comments.unshift(newComment._id);
          target.save();
          newComment.save();
          console.log(newComment, " is registed");
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
    await CommentCollection.findByIdAndRemove(id, function(err, result) {
      if (err) console.error(err);
      res.status(204).send("success"); // No Content
    });
  } catch (e) {
    console.error(e);
  }
}
async function updateComment(req: Request, res: Response) {
  const { id } = req.params;

  const schema: Joi.ObjectSchema = Joi.object().keys({
    userId: Joi.string().required(),
    password: Joi.string().required(),
    content: Joi.string().required()
  });

  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send(joiResult.error);
    return;
  }

  try {
    const newComment: CommentDocument | null = await CommentCollection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true
      }
    ).exec(); // new:true => 업데이트 된 데이터 반환
    if (!newComment) {
      res.status(404).send("not found");
      return;
    }
    console.log(newComment);
    res.json(newComment);
  } catch (e) {
    console.error(e);
  }
}

const CommentController = {
  addComment,
  deleteComment,
  updateComment,
  loadComments
};

export default CommentController;
