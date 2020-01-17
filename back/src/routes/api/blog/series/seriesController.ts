import { Request, Response } from "express";
import Joi from "joi";
import SeriesDocument from "models/series/SeriesDocument";
import SeriesCollection from "models/series/SeriesCollection";

async function addSeries(req: Request, res: Response) {
  const schema: Joi.ObjectSchema = Joi.object().keys({
    coverImg: Joi.string(),
    title: Joi.string().required(),
    desc: Joi.string()
  });
  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send(joiResult.error);
    console.log(joiResult.error);
    return;
  }

  const { category } = req.params;
  const { coverImg, title, desc } = req.body;

  const newSeries: SeriesDocument = new SeriesCollection({
    coverImg,
    title,
    desc,
    category
  });

  try {
    await newSeries.save(function(err, newSeries) {
      if (err) return console.error(err);
      console.log(newSeries, " is registed");
      res.json(newSeries);
    });
  } catch (e) {
    console.log(e);
  }
}
async function deleteSeries(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await SeriesCollection.findByIdAndRemove(id).exec();
    res.status(204).send("success"); // No Content
  } catch (e) {
    console.error(e);
  }
}
async function updateSeries(req: Request, res: Response) {
  const { category, id } = req.params;
  // const a = JSON.parse(req.body);
  // res.send(a);
  // return;
  const schema: Joi.ObjectSchema = Joi.object().keys({
    coverImg: Joi.string(),
    title: Joi.string(),
    desc: Joi.string()
  });

  const joiResult: Joi.ValidationResult<any> = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(400).send(joiResult.error);
    return;
  }

  try {
    const newSeries: SeriesDocument | null = await SeriesCollection.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true
      }
    ).exec(); // new:true => 업데이트 된 데이터 반환
    if (!newSeries) {
      res.status(404).send("not found");
      return;
    }
    console.log(newSeries);
    res.json(newSeries);
  } catch (e) {
    console.error(e);
  }
}

async function loadSeries(req: Request, res: Response) {
  const { id } = req.params;
  const getSeries: SeriesDocument | null = await SeriesCollection.findById(id)
    .populate("posts")
    .exec();
  res.json(getSeries);
}

const seriesController = {
  addSeries,
  deleteSeries,
  updateSeries,
  loadSeries
};

export default seriesController;
