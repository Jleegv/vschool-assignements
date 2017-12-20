import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import items from "./shop";
import cart from "./cart";

const rootReducer = combineReducers({
  items,
  cart
});

export default createStore(rootReducer, applyMiddleware(thunk));
