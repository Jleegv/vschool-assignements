import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";

function Navigate() {
  return (<div>
    <Navbar fixedTop="fixedTop" inverse="inverse" collapseOnSelect="collapseOnSelect">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="bar">Jeremy's Portfolio</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight="pullRight">
          <NavItem eventKey={1} href="#">Linked In</NavItem>
          <NavItem eventKey={2} href="https://github.com/Jleegv">GitHub</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>)
}

export default Navigate;
