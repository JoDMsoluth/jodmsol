import { Router, Request, Response } from "express";
import post from "./post";
import posts from "./posts";
const api = Router();

api.use("/post", post);
api.use("/posts", posts);

export default api;
