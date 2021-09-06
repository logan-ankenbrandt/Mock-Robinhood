const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
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
      console.log("Server has started");
      console.log(api);
    });
    
    const retrieveStocks = () => {
      let url = "http://localhost:8000"
      axios
        .get(`${url}/api/stocks`)
        .then((response) => {
          if (response.data.length > 0) {
          api.updatePrices(response.data);
          console.log("Data has been updated");
          } else {
            console.log("No data to update. (Hint: Use npm run seed!)");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    setTimeout(function request() {
      retrieveStocks();
      setTimeout(request, 1000);
    }, 1000)
  });