import React, { Component } from 'react';
import App from "./App.js";
import axios from "axios";
const data = response.data



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

    toggleCompleted(){
      this.setState(prevState =>{
        axios.put("url" + id , {completed: !prevState.completed})
        .then(response =>{
          return {completed: response.data.completed}
        })
      })
    }

    addTodo(info){
      axios.post("https://api.vschool.io/jeremyjones/todo/", info).then(response =>{
        this.setState(prevState =>{
          const newInfo = response.data;
          const todos = [newInfo, ...prevState.todos];
          return {todos: todos}
        })
      })
    }

    deleteTodo(id){
        axios.delete("https://api.vschool.io/jeremyjones/todo/", id).then(response => {
            console.log({msg: response.data})
            this.setState(prevState => {
              const index = prevState.todos.findIndex(todo => {
                if (todo._id === id)
                      return index})
                prevState.todos.splice(index, 1)
                    return {
                      todos: prevState.todos
                }
              });
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
