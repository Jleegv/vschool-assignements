import React from "react";
import {Grid, Row, Col} from "react-bootstrap";

function Body(){
  return (
    <div>
      <Grid>
        <Row>
          <Col sm={12} md={6}>
            <div className="card">
              <h3>Web Design</h3>
              <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="card">
              <h3>Full Stack Development</h3>
              <ul>
                <li>React JS</li>
                <li>Javascript ES6</li>
                <li>JQuery</li>
                <li>Mongo DB</li>
                <li>Express</li>
                <li>Redux</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>

  )
}

export default Body;
