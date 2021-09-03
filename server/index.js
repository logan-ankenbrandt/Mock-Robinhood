const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var cors = require("cors");
const api = require("../api/index");
var axios = require("axios");

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
      console.log(api);
    });
    // How do I make the setInterval function wait
    // for the last call to finish before it starts the next one?
    // 
    
    // const retrieveStocks = () => {
    //   let url = "http://localhost:8000"
    //   axios
    //     .get(`${url}/api/stocks`)
    //     .then((response) => {
    //       api.updatePrices(response.data);
    //       console.log("Data has been updated");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    
    // setTimeout(function request() {
    //   retrieveStocks();
    //   setTimeout(request, 500);
    // }, 500)
  });