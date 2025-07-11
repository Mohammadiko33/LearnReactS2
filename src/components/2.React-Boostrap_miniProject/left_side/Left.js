import React, { Component } from "react";
import { Form , Button } from "react-bootstrap";
import "./Left.css";

export default class Left extends Component {
  render() {
    return (
      <Form>
          <Form.Group className="mb-3" controlId='formBasicEmail'>
            <Form.Label>User Email Address</Form.Label>
            <Form.Control type="text" placeholder="Enter UserName" />
          </Form.Group>


          <Form.Group className="mb-3" controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">Login</Button>
      </Form>
    );
  }
}
