export function addedItems(item) {
  return {
    type:"ADD_ITEMS",
    item
  }
}

export function deleteItems(id) {
  return {
    type:"DELETE_ITEMS",
    id
  }
}


export default function reducer(prevState=[], action){
  switch(action.type) {
    case "ADD_ITEMS":
      return [...prevState, action.item]
    case "DELETE_ITEMS":
      const copy = [...prevState]
      const index = copy.findIndex(item => action.id === item._id)
      copy.splice(index, 1)
        return copy;
    default:
      return prevState
  }
}
