const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arSchema = new Schema({
    imgUrl: String,
    name: String,
    description: String,
    price: Number
  },
{timestamps: true});

module.exports = mongoose.model("ArItems", arSchema);
