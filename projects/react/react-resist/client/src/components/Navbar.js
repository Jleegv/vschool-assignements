import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default function Navigate() {
  return (
    <div>
    <Navbar collapseOnSelect>
    <Navbar.Header>
      {/* <img src={require("../images/jeremey-logo.png")}/> */}
    </Navbar.Header>
    <Navbar.Collapse>

      <Nav pullRight="pullRight">
        <LinkContainer to="/home">
          <NavItem eventKey={1} href="1">Home</NavItem>
        </LinkContainer>

          {/* <LinkContainer to="/info">
            <NavItem eventKey={2} href="1">Info</NavItem>
          </LinkContainer> */}

        <LinkContainer to="/shop">
          <NavItem eventKey={3} href="1">Shop</NavItem>
        </LinkContainer>

        <LinkContainer to="/cart">
          <NavItem eventKey={4} href="1">Cart</NavItem>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
  )
}
