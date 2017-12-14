const express = require("express");
const app = express();
const port = 3030;
const bodyParser = require("body-parser");
const uuid = require('uuid/v4');

app.use(bodyParser.json());

const bounties = [];

app.listen(port, ()=> {
    console.log(`App is listening on port ${port}!`)
})

app.get("/bounties", (req, res)=>{
    return res.send(bounties);
 });


app.post("/bounties", (req, res)=> {
  req.body.id = uuid();
    bounties.push(req.body)
    return res.send({
      message: "here is your new Bounty-Hunter",
      bounty: req.body
    });
  })
