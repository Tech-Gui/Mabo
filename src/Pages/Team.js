import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Team() {
  return (
    <Container>
      <div class="section__title text-center">
        <h2 class="section__description">Meet The Management Team</h2>
        <h3 class="section__header">
          Meet the people responsible for the successful completion of your
          projects.
        </h3>
      </div>

      <Row>
        <Col>
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <img
              className="mx-auto rounded-circle"
              src="img/sizwe1.jpeg"
              alt="..."
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h4 style={{ color: "#d46a6a" }}>Sizwe Mkhabela</h4>
            <p className="text-muted1">Managing Director</p>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Twitter Profile"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Facebook Profile"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Col>
        <Col>
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <img
              className="mx-auto rounded-circle"
              src="img/ndumi1.jpg"
              alt="..."
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h4 style={{ color: "#d46a6a" }}>Nondumiso Mswell</h4>
            <p className="text-muted1">Chief Operations Officer</p>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Twitter Profile"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Facebook Profile"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Col>
        <Col>
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <img
              className="mx-auto rounded-circle"
              src="img/simba1.jpeg"
              alt="..."
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h4 style={{ color: "#d46a6a" }}>Greatman Hove</h4>
            <p className="text-muted1">Contracts Manager</p>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Twitter Profile"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Facebook Profile"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              style={{ borderRadius: "100%" }}
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
