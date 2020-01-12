import { Router, Request, Response } from "express";
import PostCollection from "models/post/PostCollection";
import PostDocument from "models/post/PostDocument";

const posts = Router();

posts.get("/load", (req: Request, res: Response) => {
  const getPosts = PostCollection.find({}, function(err, getPosts) {
    if (err) return console.error(err);
    console.log(getPosts);
  });
  const posts = JSON.stringify(getPosts);
  res.send(posts);
});

export default posts;
