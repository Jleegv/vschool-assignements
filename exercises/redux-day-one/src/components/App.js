import React from "react";
import {connect} from "react-redux";
import {increment, decrement} from "../redux/counter";

function App(props){
  const styles={
    div:{
      margin:"0 auto",
      display:"block",
      textAlign:"center"
    }
  }
  return (
    <div>
      <h1 style={styles.div}>MOST COMPLICATED COUNTER YOU'VE SEEN</h1>
      <button style={styles.div} onMouseOver={props.decrement}>-</button>
      <div style={styles.div }>{props.count}</div>
      <button style={styles.div} onClick={props.increment}>+</button>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

const AppContainer = connect(mapStateToProps, {increment, decrement})(App);
export default AppContainer;
