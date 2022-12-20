import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" bg="white" variant="light" className="fixed-top custom-nav">
        <Container>
          <Navbar.Brand className="navbar-brand" href="/">alba</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-link">
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#career" >Career</Nav.Link>
              <a href="contact" className="btn btn-warning contact-btn" ><b>Contact us</b></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
