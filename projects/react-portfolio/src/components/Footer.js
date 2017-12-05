import React from "react";
import {Grid, Col, Row} from "react-bootstrap";

function Footer(){
  return(
    <div className="footer">
    <Grid>
      <Col>
        <Row sm={12} md={6}>
            <p className="footer-txt">Phone: (530)613-5095</p>
            <p className="footer-txt">JayLeeJones13@gmail.com</p>
        </Row>
      </Col>
    </Grid>
  </div>

  )
}
export default Footer;
