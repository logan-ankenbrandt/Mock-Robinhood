var axios = require('axios');

function updatePrices(data) {
    const url = "http://localhost:8000";
    let len = data.length;
    for (let i = 0; i < len; i++) {
        let price = data[i].price;
        let min = Math.ceil(price - (price * 0.05));
        let max = Math.floor(price + (price * 0.05));
        let newPrice = Math.floor(Math.random() * (max - min + 1)) + min;
        let id = data[i]._id;
        axios
            .patch(`${url}/api/stocks/${id}`, {
                price: newPrice
            })
            .then(res => {
                console.log(res);
            })
            .catch(err=> {
                console.log(err);
            });
    };
}

module.exports = { updatePrices };