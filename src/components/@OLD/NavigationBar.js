import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar key="md" expand="md" className="navigator">
        <Container fluid>
          <Navbar.Brand href="#" className="brand-logo" />
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbar-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbar-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#services">Our Services</Nav.Link>
                <Nav.Link href="#products">Why Us</Nav.Link>
                <Nav.Link href="#testi">Testimonial</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
