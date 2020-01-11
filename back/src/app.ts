import express from "express";
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

module.exports = app;
