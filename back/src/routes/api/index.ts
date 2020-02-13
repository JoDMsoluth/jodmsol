import { Router } from "express";
import blogApi from "./blog";
import projectApi from "./project";
import { countVisitor } from "lib/middlewares/countVisitor";
import viewsApi from "routes/views";
const api = Router();

api.use("/blog", countVisitor, blogApi);
api.use("/project", countVisitor, projectApi);
api.use("/views", viewsApi);

export default api;
