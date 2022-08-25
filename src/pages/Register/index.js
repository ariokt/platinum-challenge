import React from "react";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="sign-section">
      <div className="sign-form">
        <div className="square"></div>
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="name"
              placeholder="Nama Lengkap"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create Password*</Form.Label>
            <Form.Control type="password" placeholder="6+ Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className="btn-submit">
              Sign Up
            </Button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="sign-link">
              Sign In here
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="sign-img"/>
    </section>
  );
};

export default Login;
