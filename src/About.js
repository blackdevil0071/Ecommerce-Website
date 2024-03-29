// About.js
import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="text-center mt-3 mb-4">
      <h2>About The Generics Music</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="border-0">
            <Card.Body className="d-md-flex align-items-start border-0">
              <div className="mr-md-3 mb-3 mb-md-0">
                <Image
                  src="logo192.png"
                  alt="The Generics Music Logo"
                  roundedCircle
                  className="img-fluid"
                  style={{ maxWidth: "300px", backgroundColor: "black" }}
                />
              </div>
              <div className="text-start">
                <p >
                  Welcome to The Generics Music – your one-stop destination for
                  quality music products. We are passionate about providing a
                  wide range of music items to cater to your musical needs.
                  Whether you are a professional musician or just starting your
                  musical journey, we have something for everyone.
                </p>
                <p>
                  Our mission is to offer a diverse selection of music
                  instruments, accessories, and merchandise. At The Generics
                  Music, we believe in the power of music to inspire and bring
                  people together. Our team is dedicated to ensuring you have
                  access to the best products that enhance your musical
                  experience.
                </p>
                <p>
                  Explore our online store to discover a variety of instruments,
                  including guitars, keyboards, drums, and more. We also offer a
                  range of music accessories such as cables, stands, and cases.
                  Additionally, check out our collection of music-themed
                  merchandise to showcase your love for music.
                </p>
                <p>
                  Thank you for choosing The Generics Music. Feel free to reach
                  out to us if you have any questions or if there's anything
                  specific you are looking for. Let the music play!
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
