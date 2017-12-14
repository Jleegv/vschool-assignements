const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/parts", require("./routes/arRoutes.js"))

app.listen(port, ()=>{
  console.log(`Your server is listening on port ${port}`)
})

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ar-inventory",
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// Check if the server is working correctly
// app.get("/", (req, res) => {
//     res.send("It's working!");
// });
