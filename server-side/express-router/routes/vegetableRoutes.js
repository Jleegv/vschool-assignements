// Routes for 'vegetables'
const express = require("express");
const veggieRouter = express.Router();

const veggieData = [];

veggieRouter.route("/")
    .get((req, res) => {
        res.send(veggieData);
    })
    .post((req, res) => {
        res.send("POST on /vegetable endpoint");
    });

veggieRouter.route("/:vegetableId")
    .get((req, res) => {
        res.send(`GET  on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT  on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE  on /vegetable/${req.params.vegetableId} endpoint`);
    });

    module.exports = veggieRouter;
