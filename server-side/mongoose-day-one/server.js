const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/people")
const Schema = mongoose.Schema

const friendSchema = new Schema ({
  name:String,
  age:Number,
  interests:[String],
  friends:[String]
});

const Friend = mongoose.model("Friend", friendSchema)

const myFrank = new Friend({
  name:"Frank",
  age:29,
  interests:["Knitting", "Creeping", "Stalking"],
  friends:[]
})

const myLuke = new Friend({
  name:"Luke",
  age:25,
  interests:["Knitting", "Creeping", "Stalking"],
  friends:[]
})

myFrank.save((err, friend)=>{
  console.log(friend)
})

// Friend.find({age: 25}, (err, friend)=>{
//   console.log(friend)
// })

Friend.findOne({name:"Frank"}, (err, friend)=>{
    friend.name = "Jack Daniels"
    friend.save((err, friend)=>{
      console.log(friend, "Successfully added")
    })
})
