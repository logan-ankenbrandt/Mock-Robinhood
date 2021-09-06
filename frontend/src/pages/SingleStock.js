import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function SingleStock(props) {
    const [stock, getStock] = useState({});
    const [price, getPrice] = useState(0);
    const [chartData, getChartData] = useState([]);
    let { symbol } = useParams();

    const url = "http://localhost:8000";

    useEffect(() => {
      setTimeout(function request() {
        retrieveStocks();
        getLocalPrice();
        setTimeout(request, 250);
      }, 250);
    }, []);
    
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

    const getLocalPrice = () => {
      let ticker = symbol;
      let data = JSON.parse(localStorage.getItem(ticker));
      let arr = []
      data.forEach((item, index) => {
        arr.push([index, item]);
      })
      arr.unshift(["x", ticker]);
      getChartData(arr);
    };

    return (
      <Container>
        <h1>{symbol}</h1>
        <hr />
        <h4 style={{ color: "blue" }}>{price}</h4>

        <Chart
          width={"100%"}
          height={"300px"}
          chartType="LineChart"
          loader={<div>Loading Chart...</div>}
          data={chartData}
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(withRouter(SingleStock));
