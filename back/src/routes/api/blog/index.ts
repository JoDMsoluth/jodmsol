import { Router } from "express";
import post from "./post";
import posts from "./posts";
import series from "./series";
import comments from "./comments";

const blogApi = Router();

blogApi.use("/post", post);
blogApi.use("/posts", posts);
blogApi.use("/comments", comments);
blogApi.use("/series", series);

export default blogApi;
