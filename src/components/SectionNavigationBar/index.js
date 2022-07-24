import React from "react";
import "./index.css";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div>
      <Navbar key="md" expand="md" className="navigator">
        <Container fluid>
          <Link to="/" className="brand-logo">
            <Navbar.Brand href="#" />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbar-expand-md"
            placement="end"
            style={{width:"50%"}}
          >
            <Offcanvas.Header closeButton>
              <Link to="/" className="offset-brand-logo">
                <Navbar.Brand href="#" />
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/services" className="nav-link">
                  <Nav.Link href="#services">Our Services</Nav.Link>
                </Link>
                <Link to="/products" className="nav-link">
                  <Nav.Link href="#products">Why Us</Nav.Link>
                </Link>
                <Link to="/testi" className="nav-link">
                  <Nav.Link href="#testi">Testimonial</Nav.Link>
                </Link>
                <Link to="/faq" className="nav-link">
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
