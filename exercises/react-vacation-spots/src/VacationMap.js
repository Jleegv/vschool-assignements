import React from "react";

function VacationMap(props){
  return(
    <div>
      <h1>Place: {props.place}</h1>
      <h3>Price: {props.price}</h3>
      <p>Best time to visit: {props.timeToGo}</p>
    </div>
  )
}
export default VacationMap;
