import React, {Component} from "react";
import VacationMap from "./VacationMap.js";

class Body extends Component {
  constructor(props){
    super(props);
      this.vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]
    }
    render(){
      return(this.vacationSpots.map((spot, index)=> {
        return(
          <div>
          <VacationMap
            place={spot.place}
            price={spot.price}
            timeToGo={spot.timeToGo}
            />
          </div>
        )
      }))
    }
  }
export default Body;
