const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const atuhorizationRoutes = require("./routes/authorization")

const app = express();

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use("/api/authorization", atuhorizationRoutes);

  module.exports = app;
