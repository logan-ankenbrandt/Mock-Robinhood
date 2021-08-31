const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/gatsby-robinhood", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/api", routes);

    app.listen(8000, () => {
      console.log("Server has commenced");
    });
  });
