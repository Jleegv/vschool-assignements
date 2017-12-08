//nodemon is a module that restarts your server when changes are made
//to start our server we use nodemon app.js instead of node
const express = require("express");
const app = express();
const port = 3000;

//express can't handle req.body so we use bodyParser npm package
const bodyParser = require("bodyParser");

//listen takes a port parameter for your local host
//second parameter takes a function
// app.listen(3000, ()=> {
//   console.log(`App is listening on port ${port}!`)
// })

//first argument is the path, typically a / for the base URL
//second argument is a function that takes the get request req, res
// let number = 0;
//
// app.get("/search", (req,res) => {
//   console.dir(req.query)
//     return res.send(`You put ${req.params.id} as a parameter`);
// })

// app.get("/search", (req,res) => {
//   console.dir(req)
// return res.send(`<h1>Count:</h1> <ul><li>${count++}</ul></li>`)
// })
//
// //quote seen below is a param object
// app.get("/nice/:value", (req, res) => {
//   return res.send((number+=Number(req.params.value)).toString());
// })

app.use(bodyParser.json());
