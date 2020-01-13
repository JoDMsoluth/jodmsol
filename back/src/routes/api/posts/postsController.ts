import { Request, Response } from "express";
import PostCollection from "models/post/PostCollection";
import PostDocument from "models/post/PostDocument";

async function readAllPosts(req: Request, res: Response) {
  const page: number = parseInt(req.query.page || "1", 10);
  if (page < 1) {
    res.status(400).send("bad request");
    return;
  }
  try {
    const getPosts: PostDocument[] | null = await PostCollection.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount: number = await PostCollection.countDocuments().exec();
    res.set("Last-Page", Math.ceil(postCount / 10).toString());
    getPosts.map(post => ({
      ...post,
      markdown:
        post.markdown.length < 600
          ? post.markdown
          : `${post.markdown.slice(0, 600)}`
    }));
    console.log(getPosts);
    res.json(getPosts);
  } catch (e) {
    console.error(e);
  }
}

const postsController = {
  readAllPosts
};

export default postsController;
