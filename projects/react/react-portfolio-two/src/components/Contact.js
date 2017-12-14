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
            <p className="contact-txt">If you would like to get into contact with me via email feel free to leave a message below. I can typically respond within one to two business days. If you prefer I can also accept phone calls Mon-Fri 8am to 5pm. Prefer email on the weekends. I Look forward to hearing from you!</p>
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
                    <li className="li-txt">Telephone: (530)613-5095</li>
                    <li className="li-txt">Address:<br></br> 12249 Poplar Rd</li>
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
