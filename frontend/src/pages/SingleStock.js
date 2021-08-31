import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    return (
        <Container>
            <h1>{symbol}</h1>
            <hr />
            <p>{price}</p>
        </Container>
    );
}

export default SingleStock;