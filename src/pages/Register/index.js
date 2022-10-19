import React, { useState } from "react";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import validator from 'validator';
import axios from "axios";
import RegisterError from "../../components/RegisterError";
import './index.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [error, setError] = useState("");

  async function register() {
    const sendData = {
      email: email,
      password: password,
      role: 'Costumer'
    }

    try {
      await axios({
        method: "post",
        url: "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
        data: sendData
      });
      navigate(`/login`);
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    if (validator.isEmail(email) === false) {
      setError("Email tidak sesuai format!");
    } else if (password.length < 6) {
      setError("Password kurang dari 6 karakter!");
    } else if (confirmpass !== password) {
      setError("Confirm password tidak sesuai password!");
    } else {
      register();
    }
  }

  return (
    <section className="signup-section">
      <div className="signup-form">
        <Link to="/">
          <div className="signup-form__logo"></div>
        </Link>
        <h1>Sign Up</h1>
        {error && (< RegisterError message={error} setError={setError}/>)}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Create Password*</Form.Label>
            <Form.Control type="password" placeholder="6+ karakter" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password*</Form.Label>
            <Form.Control type="password" placeholder="6+ karakter" onChange={(e) => setConfirmpass(e.target.value)}/>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className="signup-form__btn" onClick={handleRegister}>
              Sign Up
            </Button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Sign In here
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="signup-img"/>
    </section>
  );
};

export default Login;
