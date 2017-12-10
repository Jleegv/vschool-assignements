import React from "react";
import {Grid, Col, Row} from "react-bootstrap";
// import ContactImage from "Contact-image.js";

export default function Contact() {
  return (
    <div className="contact-background">
    <div className="contact-container">
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <h1 className="contact-title">Email Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque elementum justo quis pulvinar. Cras nec massa tempor, varius ex vitae, aliquet lacus. Etiam nec varius dui, vitae vulputate erat. Ut laoreet lorem at augue feugiat, vel ultrices libero ornare. Integer tincidunt, velit vel bibendum accumsan, augue nibh feugiat metus, eget volutpat tellus diam quis urna. Quisque lacus est, pharetra in venenatis vel, tincidunt ut metus. Integer suscipit placerat justo sit amet ullamcorper.</p>
            <Row>
              <Col md={6} sm={12}>
                <input placeholder="*Name" className="contact-input"/>
              </Col>
              <Col md={6} sm={12}>
                <input placeholder="*Email" className="contact-input"/>
              </Col>
              <Col xs={12}>
                <textarea placeholder="*Message" className="contact-message"/>
                <button className="submit-btn">Submit</button>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={4}>
            <aside className="side-bar">
              <ul className="contact-list">
                <h2 className="ul-title">Contact</h2>
                    <li className="li-txt">Email: @gmail.com</li>
                    <li className="li-txt">Telephone: (530)613-5095</li>
                    <li className="li-txt">Address: 123 Polar Rd</li>
                    <li className="li-txt">Auburn, CA 95602</li>
                <a href="downloadlink" download>
                <i id="download-icon"
                   className="fa fa-download"
                   aria-hidden="true">Resume</i>
                </a>
              </ul>
            </aside>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
  )
}
