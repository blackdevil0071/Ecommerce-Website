import React from "react";
import { Container,Row,Col } from "react-bootstrap";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = () => {
    const productsList = productsArr.map((product, index) => (
      <Col key={index} xs={12} md={6} lg={6}>
        {/* Each product card */}
        <div className="card mb-3">
          <img
            src={product.imageUrl}
            className="card-img-top"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: ${product.price}</p>
          </div>
        </div>
      </Col>
    ));
  
    return (
      <Container>
        <h1 className="mb-4">Music</h1>
        <Row>{productsList}</Row>
      </Container>
    );
  };
  
export default AvailableProducts;
