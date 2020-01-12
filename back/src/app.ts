import express from "express";
const app: express.Application = express();
import helmet from "helmet";
import cors from "cors";

import session from "express-session";
import cookieParser from "cookie-parser";
import errorHandler from "errorhandler";

import mongo from "connect-mongo";
import mongoose from "mongoose";
import api from "routes/api";

import dotenv from "dotenv";
dotenv.config();

// connect to mongodb
const MongoStore: mongo.MongoStoreFactory = mongo(session);
export const mongoUrl: string =
  process.env.MONGO_DB || "mongodb://localhost/127.0.0.1/";
(<any>mongoose).Promise = global.Promise; // use Node Promise. because promise not exist in mongodb
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("  MongoDB is connected successfully.");
  })
  .catch(err => {
    console.error(
      "  MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    process.exit();
  });

// setting express

app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser("abcdefghijklnmop"));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "abcdefghijklnmop",
    cookie: {
      httpOnly: true,
      secure: false //https를 쓸 때 true
    },
    store: new MongoStore({
      url: mongoUrl,
      autoReconnect: true
    }),
    name: "bck"
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

app.use("/", api);

export default app;
