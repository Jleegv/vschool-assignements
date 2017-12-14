const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/people");
const Schema = mongoose.Schema

const todoList = new Schema ({
  username: {
    type:String,
    required:true,
    unique: true
  }
  description:String,
  killMe:Boolean
})

const Todo = mongoose.model("Todo", todoList);

const myTodo = new Todo ({
  title:"Colon hurts",
  description:"Lumpy poo everywhere",
  killMe:true
})

myTodo.save((err, myTodo)=>{
  console.log(myTodo)
})

Todo.find((err, myTodo)=>{
  console.log(myTodo)
})
