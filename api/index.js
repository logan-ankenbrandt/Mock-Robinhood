var axios = require('axios');

function updatePrices(data) {
    let len = data.length;
    const url = "http://localhost:8000";
    for (let i = 0; i < len; i++) {
        let price = data[i].price;
        let price_length = price.length;
        if (price_length % 2 === 0) {
            let id = data[i]._id;
            let price_data = price[price_length - 1] - (price[price_length - 1] * .0025);
            price.push(price_data.toFixed(2));
            price.shift();
            price.shift();
            axios
                .patch(`${url}/api/stocks/${id}`, {
                    price: price
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err=> {
                    console.log(err);
                });
        } else {
            let id = data[i]._id;
            let price_data = price[price_length - 1] + (price[price_length - 1] * .005)
            price.push(price_data.toFixed(2));
            axios
                .patch(`${url}/api/stocks/${id}`, {
                    price: price
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err=> {
                    console.log(err);
                });
        }
    };
    // to call the price data, use data[i].price  
}

module.exports = { updatePrices };

data = [
  {
    _id: "612ece8624f2619aa7d6f14d",
    ticker: "TSLA",
    price: [722.57, 758.6985000000001],
    __v: 1,
  },
  {
    _id: "612ecea824f2619aa7d6f150",
    ticker: "ABNB",
    price: [180.56, 189.588],
    __v: 1,
  },
  {
    _id: "612eceb724f2619aa7d6f152",
    ticker: "MSFT",
    price: [195.23, 204.9915],
    __v: 1,
  },
  {
    _id: "612ecec624f2619aa7d6f154",
    ticker: "SNOW",
    price: [298.34, 313.25699999999995],
    __v: 1,
  },
  {
    _id: "612ecef324f2619aa7d6f157",
    ticker: "AMZN",
    price: [3230.42, 3391.9410000000003],
    __v: 1,
  },
];

console.log(updatePrices(data));