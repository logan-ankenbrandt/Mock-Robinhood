import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Stock from './Stock';
import axios from "axios";

function StocksList() {
  const [stocks, getStock] = useState([]);

  const url = 'http://localhost:8000'
  
  useEffect(() => {
    setTimeout(function request () {
      retrieveStocks();
      setTimeout(request, 10000);
    }, 10000);
  }, []);

  // Create a local storage objec that will add each new stock
  // price to an array in local storage

  // const localStorage = window.localStorage.setItem('stocks', JSON.stringify(stocks));

  const retrieveStocks = ()  => {
    axios
      .get(`${url}/api/stocks`)
      .then((response) => {
        getStock(response.data);
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