import React from "react";

function Display(props){
    return(
    <div className="container-">
      <h1>High Score: {props.score.highScore}</h1>
      <h2>Name: {props.score.name}</h2>
      <h2>Game: {props.score.game}</h2>
      <h2>Date: {props.score.date}</h2>
      <h3>Trashy?: {props.score.trashTalk}</h3>
    </div>
    );
  }

export default Display;
