import React from "react";
import "./index.css";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const NavigationBar = () => {
  
  const location = useLocation();
  const token = window.localStorage.getItem("token");

  return (
    <div className="navigator">
      <Navbar
        key="md"
        expand="md"
      >
        <Container fluid>
          <Link to="/" className="brand-logo"></Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbar-expand-md"
            placement="end"
            style={{ width: "50%" }}
          >
            <Offcanvas.Header closeButton>
              <Link to="/" className="offset-brand-logo"></Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center gap-4">
                <Nav.Link href="#services">Our Services</Nav.Link>
                <Nav.Link href="#products">Why Us</Nav.Link>
                <Nav.Link href="#testi">Testimonial</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                {!token ? (
                  <Link to="/login" className="nav-link nav-link__register" state={location.pathname}>
                    Register
                  </Link>
                ) : (
                  <Link
                    to="/"
                    className="nav-link nav-link__logout"
                    onClick={() => window.localStorage.removeItem("token")}
                  >
                    Logout
                  </Link>
                )}
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
