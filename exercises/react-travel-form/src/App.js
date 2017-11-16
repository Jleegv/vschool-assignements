import React, { Component } from 'react';
import "./App.css";



class App extends Component {
  constructor(){
  super();
    this.state ={
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      diet: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
  handleSubmit(e){
    e.preventDefault();
    alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nAge: ${this.state.age}\nGender: ${this.state.gender}\nLocation: ${this.state.location}\nDiet: ${this.state.diet}`)
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
    const options = this.state.diet;
    let index;
    if(e.target.type === "checkbox" && e.target.checked) {
      options.push(e.target.value);
    } else if(e.target.type === 'checkbox' && !e.target.checked) {
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    this.setState({diet: options});
  }


  render() {
    return (
      <div className="form">
        <form>
        <input name="firstName" onChange={this.handleChange} placeholder="First Name"/>
        <input name="lastName" onChange={this.handleChange} placeholder="Last Name"/>
        <input name="age" onChange={this.handleChange} placeholder="Age"/>

        <p className="meal">Gender</p>
        <p>Male:</p>
        <input name="gender" value="male" onChange={this.handleChange} type="radio" />
        <p>Female:</p>
        <input name="gender" value="female" onChange={this.handleChange} type="radio" />

        <p className="meal">Location</p>
        <select onChange={this.handleChange} name="location">
          <option value="" />
          <option value="paris">Paris</option>
          <option value="paris">Tokyo</option>
          <option value="paris">Chicago</option>
        </select>

        <div name="meal restrictions">
        <p className="meal">Meal Restrictions</p>
        <p>Vegetarian:</p>
        <input onChange={this.handleChange} value="vegetarian" type="checkbox" />
        <p>Vegan:</p>
        <input onChange={this.handleChange} value="vegan" type="checkbox" />
        <p>Lactose Free:</p>
        <input onChange={this.handleChange} value="lactose free" type="checkbox"/>
      </div>

        <button onClick={this.handleSubmit} className="btn" type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
