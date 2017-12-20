import React, {Component} from "react";
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import {deleteItems} from "../redux/cart/"

class Cart extends Component {
  constructor(props){
    super(props);
  this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id){
    this.props.deleteItems(id);
  }

  render(){
    let total = 0;
    for (let i=0; i<this.props.cart.length; i++) {
      total += Number(this.props.cart[i].price);
    }

    const cartItems = this.props.cart.map((item) => {

    return (
          <tr key={item._id}>
            <td className="cart-items">{item.name}</td>
            <td className="cart-items">{item.description}</td>
            <td className="cart-items">${item.price}</td>
            <td><input
              className="table-input"
              type="number"/></td>
            <td><i onClick={()=> this.onDelete(item._id)} className="fa fa-trash-o" aria-hidden="true" id="cart-delete"></i></td>
          </tr>
      );
    })

    return (
      // <div className="shop-img">
      <div className="cheese">
        <h1 className="cart-title-top">Shopping Cart</h1>
          <a className="cart-title-link" href="http://localhost:3000/shop">Back to parts</a>
        <Table
          striped
          id="table-border"
          bordered
          className="cart-table"
          responsive>
          <thead className="cart-title">
            <tr>
              <th className="cart-title">Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems}
            <tr><td className="cart-total" colSpan="5"><b>Total:</b> ${total}.00</td></tr>
          </tbody>
        </Table>
      </div>
    // </div>
    )
  }}

export default connect(state => state, {deleteItems})(Cart);
