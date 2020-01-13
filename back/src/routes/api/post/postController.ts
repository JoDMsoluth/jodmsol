import { Request, Response } from "express";
import PostCollection from "models/post/PostCollection";
import PostDocument from "models/post/PostDocument";
import Joi from "joi";

//read
export async function readPost(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const getPost: PostDocument | null = await PostCollection.findById(
      id
    ).exec();
    if (!getPost) {
      res.status(404);
      return;
    }
    console.log(getPost);
    res.json(getPost);
  } catch (e) {
    console.error(e);
  }
}
//write
export async function writePost(req: Request, res: Response) {
  const schema: Joi.ObjectSchema = Joi.object().keys({
    title: Joi.string().required(),
    markdown: Joi.string().required(),
    tags: Joi.string()
  });
  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send("bad request");
    return;
  }

  const { title, markdown, tags } = req.body;
  const newPost: PostDocument = new PostCollection({
    title,
    markdown,
    tags,
    likes: 0
  });
  try {
    await newPost.save(function(err, newPost) {
      if (err) return console.error(err);
      console.log(newPost, " is registed");
      res.json("success");
    });
  } catch (e) {
    console.log(e);
  }
}
//delete
export async function deletePost(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await PostCollection.findByIdAndRemove(id).exec();
    res.status(204); // No Content
  } catch (e) {
    console.error(e);
  }
}
//update
export async function updatePost(req: Request, res: Response) {
  const schema: Joi.ObjectSchema = Joi.object().keys({
    title: Joi.string(),
    markdown: Joi.string(),
    tags: Joi.string()
  });
  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send("bad request");
    return;
  }
  const { id } = req.params;
  try {
    const newPost: PostDocument | null = await PostCollection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true
      }
    ).exec(); // new:true => 업데이트 된 데이터 반환
    if (!newPost) {
      res.status(404).send("not found");
      return;
    }
    console.log(newPost);
    res.json(newPost);
  } catch (e) {
    console.error(e);
  }
}

const postController = {
  readPost,
  writePost,
  deletePost,
  updatePost
};

export default postController;
