import React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import WorkCard from "./WorkCard";

  export default function Portfolio() {
    return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 className="port-title">About</h2>
          <p className="port-txt">Sed sollicitudin feugiat dapibus. In quis magna non neque rhoncus pharetra. Duis viverra velit felis, non lacinia metus commodo ac. Vivamus purus neque, elementum at lacus eu, posuere tempor lacus. Aliquam erat volutpat. Integer aliquam tempor elit, a sagittis augue blandit eu. Suspendisse euismod semper ipsum.non neque rhoncus pharetra. Duis viverra velit felis, non lacinia metus commodo ac. Vivamus purus neque, elementum at lacus eu, posuere tempor lacus. Aliquam erat volutpat. Integer aliquam tempor elit, a sagittis augue blandit eu. Suspendisse euismod semper ipsum.</p>
        </Col>
      </Row>
      <Row>
        <WorkCard heading="Omnifood" description="Work 1 Description"/>
        <WorkCard heading="What's Going On" description="WHAT AM I DOING WITH MY LIFE"/>
      </Row>
      <Row>
        <WorkCard heading="Work 3" description="WHAT IS GOING ON"/>
        <WorkCard heading="Work 4" description="SLOWLY GETTING THERE"/>
      </Row>
    </Grid>
    )
  }
