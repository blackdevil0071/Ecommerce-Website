import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { useCart } from "./CartProvider";

const Products = () => {
  const { productTitle } = useParams();
  const { addItemToCart } = useCart();

  const productDetails = {
    Colors: {
      title: "Colors",
      price: 100,
      imageUrl: "https://example.com/colors.jpg",
      description: "Beautiful colors for your collection.",
    },
    Black_and_white_Colors: {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
    Yellow_and_Black_Colors: {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },
    Blue_Color: {
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
  };

  const product = productDetails[productTitle];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addItemToCart({
      id: product.title,
      title: product.title,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <Container>
      <h2>{product.title}</h2>
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <Image src={product.imageUrl} alt={product.title} fluid />
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <p className="h4">${product.price}</p>
              <Button variant="info" onClick={handleAddToCart}>
                ADD TO CART
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
