import React from "react";
import {Navbar,Nav,NavItem,NavDropdown, MenuItem} from "react-bootstrap";

function Main(){
  const styles = {
    navBar: {
      borderRadius:0,
    }
  }
  return (
    <Navbar fixedTop style={styles.navBar} inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>Build Your AR-15</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {/* <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem> */}
        <NavDropdown eventKey={3} title="Get Started" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Upper Receivers</MenuItem>
          <MenuItem eventKey={3.2}>Lower Receivers</MenuItem>
          <MenuItem eventKey={3.3}>Rail Systems</MenuItem>
          <MenuItem eventKey={3.4}>Buffer Systems</MenuItem>
          <MenuItem eventKey={3.5}>Barrels</MenuItem>
          <MenuItem eventKey={3.6}>Optics</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Parts</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Contact</NavItem>
        <NavItem eventKey={2} href="#">Info</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Main;
