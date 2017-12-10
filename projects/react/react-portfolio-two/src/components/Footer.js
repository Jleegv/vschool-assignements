import React from "react";
import {Grid, Col, Row, Nav,NavItem} from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Grid>
        <Row>
          <Col sm={12} md={4}>
            <h4 className="footer-txt">&copy;2017<b>Jeremy Lee</b></h4>
          </Col>

          <Col sm={12} md={4}>
            <Nav pullRight>
              <NavItem>
                <i id="icon-facebook"
                   class="fa fa-facebook"
                   aria-hidden="true"></i>
              </NavItem>

              <NavItem>
                <i id="icon-twitter"
                   class="fa fa-twitter"
                  aria-hidden="true"></i>
              </NavItem>

              <NavItem>
                <i id="icon-github"
                  class="fa fa-github"
                  aria-hidden="true"></i>
                </NavItem>
              </Nav>
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}
