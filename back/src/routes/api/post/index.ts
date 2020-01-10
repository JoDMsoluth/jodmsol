import express, { Router } from "express";
const router = express.Router();

router.use("/write", function(req: express.Request, res: express.Response) {
  res.send("post wire");
});

export default router;
