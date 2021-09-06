import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Stock from './Stock';
import axios from "axios";

function StocksList() {
  const [stocks, getStock] = useState([]);

  const url = 'http://localhost:8000'
  
  useEffect(() => {
    setTimeout(function request () {
      retrieveStocks();
      setTimeout(request, 250);
    }, 250);
  }, []);

  const retrieveStocks = ()  => {
    axios
      .get(`${url}/api/stocks`)
      .then((response) => {
        getStock(response.data);
        response.data.forEach((stock) => {
          const ticker = stock.ticker;
          const price = stock.price;
          const prices = JSON.parse(localStorage.getItem(ticker)) || [];
          if (prices.length >= 300) {
            prices.push(price);
            prices.shift();
          } else {
            prices.push(price);
          }
          localStorage.setItem(ticker, JSON.stringify(prices));
        });
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withRouter(StocksList));