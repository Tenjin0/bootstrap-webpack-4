import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import { connect } from "react-redux";
import List from './List'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.componentWillReceiveProps)
    return(
      <Row className="mt-5">
      <Col md={{ size: 4, offset: 1}}>
        <h2>Articles</h2>
        <List />
      </Col>
      </Row>
    )
  }
}

export default App;