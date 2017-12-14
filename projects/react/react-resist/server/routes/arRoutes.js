const express = require("express");
const arRoutes = express.Router();
const arItem = require("../models/arItems");

arRoutes.route("/")
  .get((req,res) => {
    arItem.find((err, items) => {
        if (err) return res.status(500).send(err);
        res.send(items)
    })
  })
  .post((req, res)=> {
    const newItem = new arItem(req.body);
    newItem.save(err => {
        if (err) return res.status(500).send(err);
        res.send(newItem);
      })
  });

  arRoutes.route("/:id")
  .delete((req, res) => {
    arItem.findByIdAndRemove(req.params.id, (err, item) => {
        if (err) return res.status(500).send(err);
        res.send(item);
    });
});

module.exports = arRoutes;
