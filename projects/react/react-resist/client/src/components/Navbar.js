import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default function Navigate() {
  return (
    <div>
    <Navbar collapseOnSelect>
    <Navbar.Header>
      <img className="logo" src={require("../images/resist-rifles-logo-01.png")}/>
    </Navbar.Header>
    <Navbar.Collapse>

      <Nav pullRight>
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

        <LinkContainer to="/forum">
          <NavItem eventKey={5} href="1">Forum</NavItem>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
  )
}
