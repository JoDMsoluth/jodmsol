import { Router } from "express";
import { checkObjectId } from "lib/middlewares/checkObjectId";
import seriesController from "./seriesController";
const seriesApi = Router();

//write
seriesApi.get("/load/:category/:id", seriesController.loadSeries);
seriesApi.post("/add/:category", seriesController.addSeries);
//delete
seriesApi.delete(
  "/delete/:category/:id",
  checkObjectId,
  seriesController.deleteSeries
);
//update
seriesApi.patch(
  "/update/:category/:id",
  checkObjectId,
  seriesController.updateSeries
);

export default seriesApi;
