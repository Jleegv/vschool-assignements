import React from "react";
import {Grid, Row, Col, Button} from "react-bootstrap";

function Container(props) {
  const styles = {
    products: {
      width: "100%"
    }
  }

  return (<div className="products">
    <Grid>
      <Row>
        <Col className="middle-picture" xs={4}>
          <div className="picture">
            <div className="picture-title">Stripped Uppers</div>
            <img style={styles.products} src={require("./images/upper.jpeg")} alt="reefles"/>
            <Button className="myBtn" bsStyle="primary" bsSize="large">Buy it Now</Button>
          </div>
        </Col>

        <Col className="middle-picture" xs={4}>
          <div className="picture">
            <div className="picture-title">Stripped Lowers</div>
            <img style={styles.products} src={require("./images/lower.jpeg")} alt="reefles"/>
            <Button className="myBtn" bsStyle="primary" bsSize="large">Buy it Now</Button>
          </div>
        </Col>

        <Col className="middle-picture" xs={4}>
          <div className="picture">
            <div className="picture-title">Rail Systems</div>
            <img style={styles.products} src={require("./images/rail.jpg")} alt="reefles"/>
            <Button className="myBtn" bsStyle="primary" bsSize="large">Buy it Now</Button>
          </div>
        </Col>

        <Col className="middle-picture" xs={4}>
          <div className="picture">
            <div className="picture-title">Buffer Systems</div>
            <img style={styles.products} src={require("./images/rail.jpg")} alt="reefles"/>
            <Button className="myBtn" bsStyle="primary" bsSize="large">Buy it Now</Button>
          </div>
        </Col>

        <Col className="middle-picture" xs={4}>
          <div className="picture">
            <div className="picture-title">Barrels</div>
            <img style={styles.products} src={require("./images/rail.jpg")} alt="reefles"/>
            <Button className="myBtn" bsStyle="primary" bsSize="large">Buy it Now</Button>
          </div>
        </Col>

        <Col className="middle-picture" xs={4}>
          <div className="picture">
            <div className="picture-title">Optics</div>
            <img style={styles.products} src={require("./images/rail.jpg")} alt="reefles"/>
            <Button className="myBtn" bsStyle="primary" bsSize="large">Buy it Now</Button>
          </div>
        </Col>

      </Row>
    </Grid>
  </div>)
}

export default Container;
