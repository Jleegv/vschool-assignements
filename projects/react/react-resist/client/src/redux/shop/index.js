import axios from "axios";

export function getShop() {
  return (dispatch) => {
    axios.get("http://localhost:8000/ar_inventory").then((response)=>{
      let items = response.data;
      dispatch({
        type:"GET_ITEMS",
        items
      })
    })
  }
}


export default function reducer(prevState=[], action){
  switch(action.type) {
    case "GET_ITEMS":
      return [...action.items];
    default:
      return prevState
  }
}
