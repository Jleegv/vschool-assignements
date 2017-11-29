// Task: build an “app” in pure JS and redux that manages contact objects (Something like `{name: "Bob", phone: "801-616-6474", email: "bziroll@vschool.io"}`). You should be able to add new objects to the array and remove people from the array.

const redux = require("redux");

function reducer(prevState = [], action) {
  switch(action.type){
    case "ADD":
      return [...prevState, action.person ]
    case "REMOVE":
      return prevState.splice(action.index)
    default:
      prevState;
  }
}

const store = redux.createStore(reducer);

store.subscribe(function() {
  const currentState = store.getState();
  console.log(currentState);
});

function add(name, phone, email) {
  return {
    type: "ADD",
    person: {
      name,
      phone,
      email
    }
  }
}

function remove(index) {
  return {
    type: "REMOVE",
    index
  }
}

store.dispatch(add
  ("Frank", "(123)-456-7890", "Frank@getsalltheladies.com")
);
store.dispatch(add
  ("Luke", "(012)-345-6789", "Luke@getsalltheladies.com")
);
store.dispatch(add
  ("Bob", "(234)-567-8910", "Bob@getsalltheladies.com")
);
store.dispatch(remove(-1))
