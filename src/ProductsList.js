import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCart } from "./CartProvider";
import { Link, Route, Router } from "react-router-dom";
import Products from "./Products";

const ProductsList = () => {
  const { addItemToCart } = useCart();
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  ];
  const handleAddToCart = (product) => {
    addItemToCart({
      id: product.title, // You might want to use a unique identifier for the product
      title: product.title,
      price: product.price,
      quantity: 1, // Default quantity when adding to cart
      imageUrl: product.imageUrl,
    });
  };

  const productsList = productsArr.map((product, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} className="offset-2">
      <div className="card mb-3">
        <img
          src={product.imageUrl}
          className="card-img-top border-0"
          alt={product.title}
        />

        <div className="card-body">
        <Link to={`/products/${product.title.replace(/\s+/g, '_')}`}>
            <h5 className="card-title">{product.title}</h5>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-text d-inline">Price: ${product.price}</p>
            <Button variant="info" onClick={() => handleAddToCart(product)}>
              ADD TO CART
            </Button>
          </div>
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

export default ProductsList;
