const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 7000
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/pets", require("./routes/petRoutes"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/pet-adoption",
  {useMongoClient: true},
  (err)=> {
    if (err) throw err;
    console.log("Connected to the database");
})

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`)
})
