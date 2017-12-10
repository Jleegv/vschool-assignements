import React, {Component} from "react";
import {Col, Modal, Button} from "react-bootstrap";

export default class WorkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this)
  }
  open(e) {
    this.setState({showModal: true})
  }

  close(e) {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div>
          <Col sm={12} md={6}>
            <div onClick={this.open} className="work-card">
              <div className="overlay">
                <h4 className="box-text">Previous Work</h4>
              </div>
            </div>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton="closeButton">
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Col>
    </div>
    )
  }
}
