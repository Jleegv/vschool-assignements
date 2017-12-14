const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000
const data = [];


app.use(bodyParser.json());

app.get("/", (req,res)=>{
  res.send(data)
  return res.send(data)
})

app.post("/", (req,res)=> {
  data.push(req.body)
  return res.send(data)
})

app.listen(port, ()=> {
  console.log(`Your server is listening on port ${port}`)
})
