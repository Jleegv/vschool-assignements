const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/ar_inventory", require("./routes/arRoutes.js"))

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ar_inventory",
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.listen(port, ()=>{
  console.log(`Your server is listening on port ${port}`);
});
