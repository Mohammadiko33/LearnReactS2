import React, { Component } from 'react'
import './components/2.React-Boostrap_miniProject/App.css'
import HeaderNav from './components/2.React-Boostrap_miniProject/Nav/Nav'
import RightSideImage from './components/2.React-Boostrap_miniProject/Main_Image/RightSideImage'
import LeftSide from './components/2.React-Boostrap_miniProject/left_side/Left'
import { Row , Container , Col } from 'react-bootstrap'

export default class App2 extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <HeaderNav />
          <Col xs={12} md={6} xxl={2}  ><LeftSide/></Col>
          <Col xs={12} md={6} xxl={2}  ><RightSideImage/></Col>
        </Row>
      </Container>
    )
  }
}
// xs sm md xl xxl