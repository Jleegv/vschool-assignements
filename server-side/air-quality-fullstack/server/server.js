const express = require("express");
const app = express();
const port = process.env.PORT || 7500;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(morgan("dev"));

// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost-air-quality",
  {useMongoClient: true}
  // err => {
  //   if (err) throw err;
  //   console.log("connected to the databse")
  // }
);

//check for server working on postman
// app.get("/", (req, res) =>{
//   res.send("It's working!")
// })

app.listen(port, ()=> {
  console.log(`Server is listening on port ${port}!`)
});
