import React, {Component} from "react";
import Index from "./Index.css";


const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change My Color
        </h1>
        <div className="myBtn">
        <button className="btn" onClick={this.changeColor}>
  				Change color
				</button>
      </div>
      </div>

    );
  }
}
 export default Toggle;
