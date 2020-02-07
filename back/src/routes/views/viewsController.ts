import { Request, Response } from "express";
import ViewsDocument from "models/views/ViewsDocument";
import ViewsCollection from "models/views/ViewsCollection";

async function loadViews(req: Request, res: Response) {
  try {
    const getViews: ViewsDocument | null = await ViewsCollection.findOne()
      .where("todayViews")
      .equals(0)
      .exec();
    console.log(getViews);
    res.json(getViews && getViews.allViews);
  } catch (e) {
    console.error(e);
  }
}
async function addViews(req: Request, res: Response) {
  try {
    const addViews: ViewsDocument | null = await ViewsCollection.create({
      allViews: 0,
      todayViews: 0
    });
    console.log(addViews);
    res.json(addViews);
  } catch (e) {
    console.error(e);
  }
}
const ViewsController = {
  loadViews,
  addViews
};

export default ViewsController;
