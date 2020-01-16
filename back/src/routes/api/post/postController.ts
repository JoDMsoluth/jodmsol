import { Request, Response } from "express";
import BlogPostCollection from "models/blogPost/BlogPostCollection";
import BlogPostDocument from "models/blogPost/BlogPostDocument";
import Joi from "joi";
import sanitizeHtml from "sanitize-html";
import { sanitizeOption } from "lib/sanitizeHtml";
import dbPropIncrease from "lib/dbPropIncrease";

//read
export async function loadPost(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const getPost: BlogPostDocument | null = await BlogPostCollection.findById(
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
export async function addPost(req: Request, res: Response) {
  console.log(req.body);
  const schema: Joi.ObjectSchema = Joi.object().keys({
    coverImg: Joi.string(),
    title: Joi.string().required(),
    markdown: Joi.string().required(),
    tags: Joi.string(),
    category: Joi.string(),
    series: Joi.string()
  });
  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send(joiResult.error);
    console.log(joiResult.error);
    return;
  }

  const { title, markdown, tags } = req.body;
  const hashtags: string[] = tags.match(/#[^\s]+/g);
  const newPost: BlogPostDocument = new BlogPostCollection({
    coverImg: "",
    title,
    markdown: sanitizeHtml(markdown, sanitizeOption),
    tags: hashtags,
    series: "",
    category: "study",
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
    await BlogPostCollection.findByIdAndRemove(id).exec();
    res.status(204); // No Content
  } catch (e) {
    console.error(e);
  }
}
//update
export async function updatePost(req: Request, res: Response) {
  const { id } = req.params;
  // const a = JSON.parse(req.body);
  // res.send(a);
  // return;
  const schema: Joi.ObjectSchema = Joi.object().keys({
    coverImg: Joi.string(),
    title: Joi.string(),
    markdown: Joi.string(),
    tags: Joi.string(),
    category: Joi.string(),
    series: Joi.string()
  });

  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send(joiResult.error);
    return;
  }
  const updateData = Object.assign({}, req.body);
  if (updateData.body) {
    updateData.body = sanitizeHtml(updateData.body);
  }
  try {
    const newPost: BlogPostDocument | null = await BlogPostCollection.findByIdAndUpdate(
      id,
      updateData,
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

//like
export async function likePost(req: Request, res: Response) {
  const { id } = req.params;
  const result = await dbPropIncrease(id, "likes", 1);
  res.json(result);
}

//unlike
export async function unlikePost(req: Request, res: Response) {
  const { id } = req.params;
  const result = await dbPropIncrease(id, "likes", -1);
  res.json(result);
}

const postController = {
  loadPost,
  addPost,
  deletePost,
  updatePost,
  likePost,
  unlikePost
};

export default postController;
