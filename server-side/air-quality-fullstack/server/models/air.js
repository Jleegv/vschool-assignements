const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airSchema = new Schema({
  ppm: Number,
  quality: {
    type: String,
    enum: ["Good", "Okay", "Poor", "Hazerdous"]
  },
  location: {
    lat: String,
    long: String
  }
}, {timestamps:true});

module.exports = mongoose.model("AirQuality", airSchema);
