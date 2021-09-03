import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Chart } from "react-google-charts";

function SingleStock(props) {
    const [stock, getStock] = useState({});
    const [price, getPrice] = useState(0);
    let { symbol } = useParams();

    const url = "http://localhost:8000";

    useEffect(() => {
      retrieveStocks();
    });

    const retrieveStocks = () => {
      axios
        .get(`${url}/api/stocks`)
        .then((response) => {
          getStock(response.data);
          let dataLength = response.data.length;
          for (let i = 0; i < dataLength; i++) {
            if (response.data[i].ticker === symbol) {
              getPrice(response.data[i].price);
            }
          }
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    };

    // const localSymbol = window.localStorage.setItem('ticker', symbol);
    // const localPrice = window.localStorage.setItem('price', price);
    return (
      <Container>
        <h1>{symbol}</h1>
        <hr />
        <p>{price[price.length - 1]}</p>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="LineChart"
          loader={<div>Loading Chart...</div>}
          data={[
            ["x", symbol],
            // Add the each price from the price array as specific
            // data points
            [0, price[0]],
            [1, price[1]],
          ]}
          options={{
            hAxis: {
              title: "Time",
            },
            vAxis: {
              title: "Price",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Container>
    );
}

export default SingleStock;