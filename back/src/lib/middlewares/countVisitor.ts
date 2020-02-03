import mongoose from "mongoose";
import { NextFunction, Request, Response } from "express";

const { ObjectId } = mongoose.Types;

export const countVisitor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  res.on("finish", () => {
      console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`) 
  })
  next()
  if (!ObjectId.isValid(id)) {
    res.status(400).send("bad request");
    return;
  }
  return next();
};

