import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        "Primary",
        "Secondary",
        "Success",
        "Danger",
        "Warning",
        "Info",
        "Light",
        "Dark",
      ],
    };
  }

  render() {
    return (
      <>
        <Container>
          <Row>  
             {this.state.colors.map((variant) => (
            // <Col xs={12} sm={8} md={6} lg={4} xl={2} xxl={1}>
            <Col xxl={4} className="mt-4">
           
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>{variant} Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}
// fluid به این معنا هست که عرض صد در صد عرش صحفه رو بگیره