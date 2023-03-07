import React, { useState } from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

export default function PageWrapper() {
  const [expanded, setExpanded] = useState(true);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      // style={{ position: "absolute" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="img/logo.png"
            alt="Mabocap logo"
            id="logo"
            data-version-number="1.0"
            style={{ width: "16rem", height: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            border: "none",
            fontSize: "1.5rem",
            color: "#222",
            marginTop: "1rem",
          }}
          onClick={toggleNavbar}
        />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Container
            className={`d-flex ${
              expanded ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <Nav className=" ml-auto " style={{ gap: "1rem" }}>
              <Nav.Link
                href="#features"
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#login"
                style={{
                  color: "#222",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: "1rem",
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link href="#signup">
                {" "}
                <Button
                  style={{
                    backgroundColor: "#d46a6a",
                    borderRadius: "3rem",
                    borderColor: "#d46a6a",
                    color: "#222",
                    marginTop: "0.5rem",
                  }}
                >
                  Contact Us
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
