import { Request, Response } from "express";
import BlogPostCollection from "models/blogPost/BlogPostCollection";
import BlogPostDocument from "models/blogPost/BlogPostDocument";
import { removeHtmlAndShorten } from "lib/sanitizeHtml";

async function loadAllPosts(req: Request, res: Response) {
  console.log("start");
  const page: number = parseInt(req.query.page || "1", 10);
  const { tag, series } = req.query;
  const { popular, latest } = req.query;
  const { category, filter } = req.params;

  console.log(
    "page tag series popular latest category filter",
    page,
    tag,
    series,
    popular,
    latest,
    category,
    filter
  );

  if (page < 1) {
    res.status(400).send("bad request");
    console.log("bad request");
    return;
  }

  try {
    const getPosts: BlogPostDocument[] | null = await BlogPostCollection.find()
      .where("category")
      .equals(category)
      .sort({ _id: Number(latest) || (Number(popular) && -1) || -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount: number = await BlogPostCollection.countDocuments().exec();
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

async function loadTags(req: Request, res: Response) {
  const { tag } = req.query;

  const { category } = req.params;
  console.log("tag category", tag, category);

  try {
    const getPosts: BlogPostDocument[] | null = await BlogPostCollection.find({
      tags: true
    })
      .sort({ tags: 1 })
      .lean()
      .exec();

    console.log(getPosts[0].tags);
    const hashtags = getPosts.map(post => post.tags);
    // match(/(\w+\b)(?!.*\1\b)/g)
    res.json(hashtags);
  } catch (e) {
    console.error(e);
  }
}

async function loadSeries(req: Request, res: Response) {
  const page: number = parseInt(req.query.page || "1", 10);
  const { series } = req.query;

  const { category, filter } = req.params;
  console.log(
    "page tag series popular latest category filter",
    page,

    series,

    category,
    filter
  );

  if (page < 1) {
    res.status(400).send("bad request");
    console.log("bad request");
    return;
  }
  try {
    const getPosts: BlogPostDocument[] | null = await BlogPostCollection.find({
      category: String(category)
    })
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount: number = await BlogPostCollection.countDocuments().exec();
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
  loadAllPosts,
  loadTags,
  loadSeries
};

export default postsController;
