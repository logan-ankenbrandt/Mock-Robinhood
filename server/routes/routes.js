const express = require('express');
const Stock = require("../models/Stock");
const router = express.Router();

router.get("/stocks", async (req, res) => {
    const stocks = await Stock.find();
    res.send(stocks);
})

router.post("/stocks", async (req, res) => {
    const stock = new Stock({
        ticker: req.body.ticker,
        price: req.body.price,
    });
    await stock.save();
    res.send(stock);
})

router.get("/stocks/:id", async (req, res) => {
    try {
        const stock = await Stock.findOne({_id: req.params.id });
        res.send(stock);
    } catch {
        res.status(404)
        res.send({error: "Stock not found"})
    }
})

router.patch("/stocks/:id", async (req, res) => {
    try {
        const stock = await Stock.findOne({_id: req.params.id});
        
        if (req.body.ticker) {
            stock.ticker = req.body.ticker;
        }

        if (req.body.price) {
            stock.price = req.body.price;
        }

        await stock.save();
        res.send(stock);
    } catch {
        res.status(404)
        res.send({error: "Stock not found"})
    }
})

router.delete("/stocks/:id", async (req, res) => {
  try {
    await Stock.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Stock doesn't exist!" });
  }
});

module.exports = router