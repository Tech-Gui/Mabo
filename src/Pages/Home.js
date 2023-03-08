import React from "react";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container
      style={{
        background: `url('img/image2.jpg') no-repeat center center fixed`,
        backgroundSize: "cover",
        height: "50vh",
      }}
      fluid
      className="d-flex justify-content-center align-items-center"
      id="home"
    >
      <div style={{ padding: "2rem" }} className="blurred-background">
        <div className="blurred-text d-flex justify-content-center flex-column ">
          <h1 className="text-center">
            Committed to <u>Superior</u> <u>Quality</u> and <u>Results</u>
            <br />
          </h1>
          <Container
            className="d-flex justify-content-center mt-3"
            style={{ gap: "2rem" }}
          >
            <Button
              style={{
                borderRadius: "0",
                background: "none",
                borderColor: "#d46a6a",
                color: "#d46a6a",
              }}
              href="#about"
            >
              Learn More
            </Button>{" "}
            <Button
              style={{
                borderRadius: "0",
                backgroundColor: "#d46a6a",
                borderColor: "#d46a6a",
                color: "#fff",
              }}
              href="#contact"
            >
              Contact Us
            </Button>
          </Container>
        </div>
      </div>
    </Container>
  );
}
