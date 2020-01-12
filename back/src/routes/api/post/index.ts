import { Router, Request, Response } from "express";
import PostCollection from "models/post/PostCollection";
import PostDocument from "models/post/PostDocument";

const post = Router();

post.post("/register", (req: Request, res: Response) => {
  const newPost: PostDocument = new PostCollection({
    title: req.body.title,
    markdown: req.body.markdown,
    tags: req.body.tags,
    likes: 0
  });
  newPost.save(function(err, newPost) {
    if (err) return console.error(err);
    console.log(newPost, " is registed");
  });
  res.send("good");
});

export default post;
