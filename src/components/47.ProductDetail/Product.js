import React from "react";
import productData from "./productData";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <Container>
      <Row>
        {productData.map((product) => (
          <Col key={product.id} md={4}> {/* هر محصول در یک ستون با عرض 4 از 12 قرار می‌گیرد */}
            <div className="product-card">
              <img src={product.image} alt={product.title} className="img-fluid" />
              <h5>{product.title}</h5>
              <p>{product.caption}</p>
              <p>قیمت: {product.price.toLocaleString()} تومان</p>
              <Link to={`/product/${product.id}`}>
                <button className="btn btn-primary">جزئیات بیشتر</button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


// import Detail from "./Detail";