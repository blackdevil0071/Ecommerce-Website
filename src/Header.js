import React, { useState } from "react";
import { Container, Navbar, Button, Card, Modal } from "react-bootstrap";
import Cart from "./Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>HOME</Navbar.Brand>
          <Navbar.Brand>STORE</Navbar.Brand>
          <Navbar.Brand>ABOUT</Navbar.Brand>
        </Container>
        <Button onClick={handleCartClick} variant="dark" className="border border-primary ms-auto">
          Cart
        </Button>
      </Navbar>

      <Card className="shadow-lg bg-secondary text-white">
        <Card.Body>
          <Container className="display-1">The Generics</Container>
        </Card.Body>
      </Card>

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
