import React from 'react'
import productData from "./productData";
import productDatas from "./productData";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <Container className='mt-4'>
      {productDatas.map((product, index) => (
        index % 3 === 0 && (
          <Row key={index} className="mb-4">
            {productDatas.slice(index, index + 3).map(product => (
              <Col key={product.id} sm={12} md={6} lg={4}>
                <Card>
                  <Card.Img style={{width: '100%' , height: '12.5rem'}} variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title className='productTitle'>{product.title}</Card.Title>
                    <Card.Text className='productCaption'>{product.caption}</Card.Text>
                    <div>
                      <h5>price : {product.price}</h5>
                    <Button as={Link} to={`/product/detail/${product.id}`} variant="primary">جزئیات</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )
      ))}
    </Container>
  );
}
