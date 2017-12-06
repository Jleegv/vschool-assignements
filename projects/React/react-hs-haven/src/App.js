import React, { Component } from 'react';
import Display from "./Display";

class App extends Component{
  constructor(){
    super();
    this.state= {
      name:"",
      game:"",
      date:"",
      highScore:"",
      isChecked:false,
      scores:[]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

trashTalk(){
    const trash = ["Trash", "Trashy", "Trashier"];
    return trash[Math.floor(Math.random() * trash.length)];
  }

handleSubmit(e){
    e.preventDefault()
    this.setState(prevState => {
    let trash = this.trashTalk();
      if(!this.state.isChecked) {
        trash = ""
      } else {
        trashTalk: trash
      }
      prevState.scores.push({
        name: prevState.name,
        game: prevState.game,
        date: prevState.date,
        highScore: prevState.highScore,
        isChecked: prevState.isChecked,
        trashTalk: trash
      })
      return {scores: prevState.scores};
    })
  }

handleInputChange(e){
    if(e.target.type === "checkbox"){
      this.setState({isChecked: e.target.checked})
    }else {
      this.setState({[e.target.name]:e.target.value})
    }
  }

render(){
  const display = this.state.scores.map((score, index)=>{
    return <Display key={score + index}score={score}/>
  })
    return(
      <form>
        <div>
          <input className="container" onChange={this.handleInputChange} name="name" placeHolder="Name"></input>
          <input className="container" onChange={this.handleInputChange} name="game" placeHolder="Game"></input>
          <input className="container" onChange={this.handleInputChange} name="date" type="Date"></input>
          <input className="container" onChange={this.handleInputChange} name="highScore" placeHolder="Highscore"></input>
          <p>Click if you aint scared:</p>
          <input className="container" onChange={this.handleInputChange} name="isChecked" type="checkbox"></input>
          <button className="btn" onClick={this.handleSubmit}>Submit</button>
        </div>
        {display}
      </form>
    );
  }
}
export default App;
