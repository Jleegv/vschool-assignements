const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  age: Number,
  spcies: String,
  adopted: {
    type: Boolean,
    default: false
  },
  breed: String,
  gender: {
    type:String,
    enum: ["Male", "Female", "Non-Binary"]
  }
})

module.exports = mongoose.model("Pet", petSchema);
