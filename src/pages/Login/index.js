import React, { useState } from "react";
import SignImage from "../../assets/image/sign-in.png";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import RegisterError from "../../components/RegisterError";
import "./index.css";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lastOrder = window.sessionStorage.getItem("LastOrder");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login() {
    const sendData = {
      email: email,
      password: password
    }
    try {
      const res = await axios({
        method:"post",
        url:"https://bootcamp-rent-car.herokuapp.com/customer/auth/login",
        data: sendData
      });
      window.localStorage.setItem("token", res.data.access_token);
      const token = res.data.access_token;
      if (location.state && lastOrder && token) {
        navigate(location.state);
      } else {
        navigate("/");
      }

    } catch (error) {
      setError(error.response.data.message);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (validator.isEmail(email) === false) {
      setError("Email tidak sesuai format!");
    } else if (password.length < 6) {
      setError("Password kurang dari 6 karakter!");
    } else {
      login();
    }
  }

  return (
    <section className="signin-section">
      <div className="signin-form">
        <Link to="/">
          <div className="signin-form__logo"></div>
        </Link>
        <h1>Welcome Back!</h1>
        {error && (< RegisterError message={error} setError={setError}/>)}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="6+ karakter" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className="signin-form__btn" onClick={handleLogin}>
              Sign In
            </Button>
          </div>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="signin-link">
              Sign Up for free
            </Link>
          </p>
        </Form>
      </div>
      <img src={SignImage} alt="sign-img" className="signin-img"/>
    </section>
  );
};

export default Login;
