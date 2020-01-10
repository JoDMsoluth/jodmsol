import express from "express";
import api from "./api";
const router = express.Router();

router.use("/api", api);
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

export default router;
