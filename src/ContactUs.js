import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const AddUserData = async () => {
    try {
      const response = await fetch("https://react-app-1e677-default-rtdb.firebaseio.com/contact.json", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json'
        }
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding user data:", error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    AddUserData();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={name} onChange={handleChange} placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="tel" name="phone" value={phone} onChange={handleChange} placeholder="Enter your phone number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactUs;
