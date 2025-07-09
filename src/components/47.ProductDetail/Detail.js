import React from 'react';
import { useParams , useNavigate, navigate } from 'react-router-dom';
import productDatas from './productData';
import { Container, Row, Col } from 'react-bootstrap';
import Detailss from './Details';

export default function Detail() {
  let params = useParams();

  let mainProduct = productDatas.find(data => data.id === +params.productID);
  let mainProductDetail = mainProduct.details[0]; // دسترسی به اولین (و تنها) عنصر

  // آرایه‌ای از پراپرتی‌ها
  const properties = [
    { name: "CPU", value: mainProductDetail.cpu },
    { name: "GPU", value: mainProductDetail.gpu },
    { name: "Memory", value: mainProductDetail.memory },
    { name: "Storage", value: mainProductDetail.storage },
    { name: "Display", value: mainProductDetail.display },
  ];

  return (
    <Container className='detail mt-5'>
      <Row>
        <Col>
          <div className="detail_image_box">
            <img src={mainProduct.image} className='detail_image' alt={mainProduct.title} />
          </div>
        </Col>
        <Col>
          <div className="titles">
            <h3 className='detail_title'>{mainProduct.title} <em>Product Color : {mainProduct.color}</em></h3> 
            <p className='detail_caption'>{mainProduct.caption}</p> <button id='buyingProductButton'>خرید فقط با قیمت : {mainProduct.price}</button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="details">
            {properties.map((property, index) => (
              <Detailss key={index} typeName={property.name} value={property.value} />
            ))}
          </div>
        </Col>
      </Row>

      <button className="restorePage ffv br10" onClick={navigate => ('login' , {replace: true})}>برگشت به صحفه محصولات</button>
    </Container>
  );
}
