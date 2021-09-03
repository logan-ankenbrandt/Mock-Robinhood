const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ticker: String,
    price: [Number],
});

module.exports = mongoose.model("Stock", schema);