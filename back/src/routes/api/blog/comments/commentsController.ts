import { Request, Response } from "express";
import Joi from "joi";
import CommentDocument from "models/comments/CommentsDocument";
import CommentCollection from "models/comments/CommentsCollection";
import BlogPostDocument from "models/blogPost/BlogPostDocument";
import BlogPostCollection from "models/blogPost/BlogPostCollection";

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

  const newComment: CommentDocument = new CommentCollection({
    userId,
    password,
    content
  });

  try {
    const targetPost: BlogPostDocument | null = await BlogPostCollection.findOne(
      { id }
    )
      .populate({ path: "comments" })
      .exec();
    if (targetPost) {
      targetPost.comments.push(newComment);
      console.log(targetPost.comments);
      await targetPost.save(function(err, newComment) {
        if (err) return console.error(err);
        console.log(newComment, " is registed");
        res.json("success");
      });
    } else {
      const targetComment: CommentDocument | null = await CommentCollection.findOne(
        { id }
      )
        .populate({ path: "childId" })
        .exec();
      if (targetComment) {
        targetComment.childId.push(newComment);
        console.log(targetComment.childId);
        await targetComment.save(function(err, targetComment) {
          if (err) return console.error(err);
          console.log(targetComment, " is registed");
          res.json("success");
        });
      } else res.status(404).send("not found");
    }
  } catch (e) {
    console.log(e);
  }
}
async function deleteComment(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await CommentCollection.findByIdAndRemove(id).exec();
    res.status(204).send("success"); // No Content
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

async function loadReplyComments(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const newComment: CommentDocument | null = await CommentCollection.findById(
      id
    )
      .populate("childId")
      .exec(); // new:true => 업데이트 된 데이터 반환
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
  loadReplyComments
};

export default CommentController;
