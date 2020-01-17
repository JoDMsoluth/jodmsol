import { Router } from "express";
import blogApi from "./blog";
const api = Router();

api.use("/blog", blogApi);

export default api;
