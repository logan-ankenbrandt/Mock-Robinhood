import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Stock from './Stock';
import axios from "axios";

function StocksList() {
  const [stocks, getStock] = useState([]);

  const url = 'http://localhost:8000'
  
  useEffect(() => {
    retrieveStocks();
  }, []);

  const retrieveStocks = ()  => {
    axios
      .get(`${url}/api/stocks`)
      .then((response) => {
        getStock(response.data);
        let dataLength = response.data.length;
        for (let i = 0; i < dataLength; i++) {
          let stock = response.data[i];
          let price = stock.price;
          console.log(price + (price *.05));
        }
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };


  return (
    <div>
      <h1>Stocks</h1>
      <Stock stocks={stocks} />
    </div>
  );
}

export default (withRouter(StocksList));