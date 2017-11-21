import React from "react";
import {Navbar, Nav, NavItem,} from "react-bootstrap";

function Navigate(){
  return(
    <div>
      <Navbar fixedTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="bar">Jeremy's Portfolio</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Linked In</NavItem>
        <NavItem eventKey={2} href="#">GitHub</NavItem>
        <NavItem eventKey={3} href="#">Downloads</NavItem>
        <NavItem eventKey={4} href="#">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
  )
}

export default Navigate;
