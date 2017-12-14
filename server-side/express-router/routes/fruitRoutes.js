// Routes for 'fruits'
const express = require("express");
const fruitRouter = express.Router();


// Here we set the route once with .route("/routeName"), then
// chain the other methods together without repeating the routeName again and again.
fruitRouter.route("/")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });

    module.exports = fruitRouter;
