import React from "react";
import { Container, Navbar, Button, Card } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>HOME</Navbar.Brand>
          <Navbar.Brand>STORE</Navbar.Brand>
          <Navbar.Brand>ABOUT</Navbar.Brand>
        </Container>
        <Button variant="dark" className="border border-primary ms-auto">
          cart(0)
        </Button>
      </Navbar>

      <Card className="shadow-lg bg-secondary text-white">
        <Card.Body>
          <Container className="display-1">The Generics</Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Header;
