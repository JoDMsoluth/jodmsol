import { Request, Response } from "express";
import BlogPostCollection from "models/blogPost/BlogPostCollection";
import BlogPostDocument from "models/blogPost/BlogPostDocument";
import { removeHtmlAndShorten } from "lib/sanitizeHtml";
import SeriesCollection from "models/series/SeriesCollection";

async function loadAllPosts(req: Request, res: Response) {
  console.log("start");
  const page: number = parseInt(req.query.page || "1", 10);
  const { tag, series } = req.query;
  const { category } = req.params;
  let { filter } = req.params;
  console.log(
    "page tag series popular latest category filter",
    page,
    tag,
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
    const getPosts: BlogPostDocument[] | null =
      filter === "latest"
        ? await BlogPostCollection.find()
            .where("category")
            .equals(category)
            .sort({ updateAt: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .lean()
            .exec()
        : filter === "popular"
        ? await BlogPostCollection.find()
            .where("category")
            .equals(category)
            .sort({ likes: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .lean()
            .exec()
        : await BlogPostCollection.find()
            .where("category")
            .equals(category)
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
    const hashtags: BlogPostDocument[] | null = await BlogPostCollection.find({
      category
    })
      .select("tags")
      .sort({ tags: 1 })
      .distinct("tags")
      .lean()
      .exec();

    console.log(hashtags);
    res.json(hashtags);
  } catch (e) {
    console.error(e);
  }
}

async function loadSeries(req: Request, res: Response) {
  const page: number = parseInt(req.query.page || "1", 10);
  const { series } = req.query;

  const { category } = req.params;
  console.log(
    "page tag series popular latest category filter",
    page,
    series,
    category
  );

  if (page < 1) {
    res.status(400).send("bad request");
    console.log("bad request");
    return;
  }
  try {
    const getSeries: BlogPostDocument[] | null = await SeriesCollection.find()
      .populate("posts")
      .where("category")
      .equals(category)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount: number = await SeriesCollection.countDocuments().exec();
    res.set("Last-Page", Math.ceil(postCount / 10).toString());
    // getSeries.map(post => ({
    //   ...post,
    //   postsCount :
    // }));
    console.log(getSeries);
    res.json(getSeries);
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
