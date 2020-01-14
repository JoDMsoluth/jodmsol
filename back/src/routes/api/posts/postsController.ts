import { Request, Response } from "express";
import PostCollection from "models/post/PostCollection";
import PostDocument from "models/post/PostDocument";
import { removeHtmlAndShorten } from "lib/sanitizeHtml";

async function loadAllPosts(req: Request, res: Response) {
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
      markdown: removeHtmlAndShorten(post.markdown)
    }));
    console.log(getPosts);
    res.json(getPosts);
  } catch (e) {
    console.error(e);
  }
}

const postsController = {
  loadAllPosts
};

export default postsController;
