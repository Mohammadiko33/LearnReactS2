import React, { Component } from 'react'
import { Navbar , Container , Offcanvas , Nav , NavDropdown , Form , Button } from 'react-bootstrap'
import './Nav.css'

export default class grid extends Component {
  render() {
    return (
      <>
        <Navbar className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="#">Leach mob</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-expand`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">about us</Nav.Link>
                  <NavDropdown
                    title="others"
                    id={`offcanvasNavbarDropdown-expand`}
                  >
                    <NavDropdown.Item href="#action3">game Web1</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                     developer
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      java scripts team
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="donbal cha megardi"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
    )
  }
}
