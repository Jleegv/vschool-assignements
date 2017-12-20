import React, {Component} from "react";
import {Grid, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {getShop} from "../redux/shop";
import {addedItems} from "../redux/cart";
import Shoptxt from "./ShopTxt.js";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item, i){
    this.props.addedItems(item);
    return document.getElementsByClassName("added-cart")[i].innerHTML =
    '<p style="background-color: rgba(0,0,0,0.9); height:472px; width: 330px; color:whitesmoke; border-radius:5px; color:green; text-align:center; padding-top:225px; font-size:24px; text-shadow:1px 1px 2px #444444;"><i style="font-size:54px;" class="fa fa-check-square-o" aria-hidden="true"></i><br>Added!</p>'
  }

  componentDidMount(){
    this.props.getShop()
  }

  render(){
    let itemList = this.props.items.map((item, i) => {
      const styles = {
        backgroundImage: `url(${item.imgUrl})`,
        height:"200px",
        width:"100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        position:"relative",
        marginBottom:"15px",
        backgroundSize: "cover"
      }
      return (
        <Col key={item._id} sm={12} md={4}>
          <div className="item-container">
            {/* <h1 className="item-title">{item.name}</h1> */}
            <h1 className="item-desc">{item.description}</h1>
            <div style={styles}></div>
            <h3 className="item-price">Price:${item.price}</h3>
            <button
              onClick={()=> {this.handleClick(item,i)}}
              className="myBtn">Add to Cart</button>
              <span className="added-cart"></span>
          </div>
        </Col>
      )
    });

    return (
    <div className="shop-img">
      <div>
        <Grid>
            <Row>
               {itemList}
            </Row>
          </Grid>
        <Shoptxt />
      </div>
    </div>
    )
  }
}

export default connect(state => state, {getShop, addedItems})(Shop);
