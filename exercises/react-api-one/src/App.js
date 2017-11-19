// import React, { Component } from 'react';
// import axios from "axios";
// const data = response.data
//
// class App extends Component {
//   constructor(){
//     super()
//       this.state ={
//         todos: []
//       }
//     }
//   }
//
//   componentDidMount(){
//     axios.get("https://swapi.co/api/people").then((response)=> {
//       this.setState({todos: response.data});
//   }
//
//
//   render() {
//     return (
//       <div>
//       </div>
//     )
//   }
// }
//
// export default App;

import React from "react";
import App from "./App.js";

import axios from "axios";

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }


    componentDidMount(){
        axios.get("https://api.vschool.io/ericnatejones/todo/").then((response)=>{
            this.setState(()=>{
               return {
                 todos: response.data
               }
            })
        })
    }

    render(){
        let mappedTodos = this.state.todos.map((todo)=>{
          return <App title={todo.title}
                       description={todo.description}
                       price={todo.price}
                       />
        })

        return mappedTodos;
    }
}

export default App;
