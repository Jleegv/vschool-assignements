import React, { Component } from 'react';
import axios from "axios";
import Person from "./Person.js";

class App extends Component {
  constructor() {
    super();
    this.state= {
      targets: []
    }
  }
  render() {
    return (
      <div>
        {this.state.targets.map((person)=>{
          return <Person info={person} />
        })}
      </div>
    );
  }

  componentDidMount(e){
    axios.get("http://api.vschool.io:6543/hitlist.json").then((response)=>
      this.setState({targets: response.data})
    )
  }
}

export default App;
