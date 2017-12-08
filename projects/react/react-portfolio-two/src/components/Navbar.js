import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default function Navigate() {
  return (
    <div>
    <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Portfolio</a>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>

      <Nav pullRight="pullRight">
        <LinkContainer to="/home">
          <NavItem eventKey={1} href="1">Home</NavItem>
        </LinkContainer>

        <LinkContainer to="/portfolio">
          <NavItem eventKey={2} href="1">Portfolio</NavItem>
        </LinkContainer>

        <LinkContainer to="/contact">
          <NavItem eventKey={3} href="1">Contact</NavItem>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
  )
}
