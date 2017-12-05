//reducer for contacts specifically
//all my action creators
import axios from "axios";

export function addContact(contact) {
  return {
    type: "ADD_CONTACT",
    contact//contacts actually means ToDos now since installing thunk
  }
}

export function getAllTodos(){
  return (dispatch) => {
    axios.get("https://api.vschool.io/jeremyjones/todo")
    .then(response => {
      dispatch({
        type:"GET_ALL_TODOS",
        todos: response.data
      })
    })
  }
}

export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_CONTACT":
      return [...prevState, action.contact]
    case "GET_ALL_TODOS":
      return action.todos
    default:
      return prevState;
    }
  }
