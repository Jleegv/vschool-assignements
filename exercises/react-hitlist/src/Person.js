import React from "react";

function Person(props){
  return (
  <div>
    <h1>{props.info.name}</h1>
    <img alt="lol" src={props.info.image} />
  </div>
  )


}
export default Person;
