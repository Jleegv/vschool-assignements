import {FormGroup, FieldGroup, CheckBox, Button} from "react-bootstrap";
import React, {Component} from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return ();
  }
}

//checkbox logic
updateInputs(e) {
  if (e.target.type === "checkbox") {
    if (e.target.checked) {
      this.setState({completed: true});
    } else {
      this.setStae({
        [e.target.name]: e.target.value
      })
    }
  }
}
