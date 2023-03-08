import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Services() {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <div class="section__title d-flex justify-content-center flex-column">
        <h2 class="section__description text-center" id="services">
          Services
        </h2>
        <h3 class="section__header text-center mb-5">
          Mabocap offers its clients the following services.
        </h3>
      </div>

      <Row
        className="d-flex justify-content-center mt-3 "
        style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
      >
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              background: `url('img/p4.jpeg') `,
              backgroundSize: "cover",
              textAlign: "center",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "rgba(39, 62, 84)",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Building Construction
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "white",
                background: "rgba(2,2,2,0.5)",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#fff",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              background: `url('img/aa.jpeg') `,
              backgroundSize: "cover",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "rgba(39, 62, 84)",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Front of Card
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "white",
                background: "rgba(2,2,2,0.5)",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#fff",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              background: `url('img/ph.jpeg') `,
              backgroundSize: "cover",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "rgba(39, 62, 84)",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Plant Hire
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                textAlign: "center",
                color: "white",
                background: "rgba(2,2,2,0.5)",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#fff",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              background: `url('img/bm1.jpeg') `,
              backgroundSize: "cover",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "rgba(39, 62, 84)",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Material and Equipment Supply
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "white",
                background: "rgba(2,2,2,0.5)",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#fff",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              background: `url('img/cv2.jpeg') `,
              backgroundSize: "cover",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "rgba(39, 62, 84)",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Civil Engineering Infrastructure
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "white",
                background: "rgba(2,2,2,0.5)",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#fff",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card
            style={{
              width: "100%",
              background: `url('img/bc.jpeg') `,
              backgroundSize: "cover",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "rgba(39, 62, 84)",
                color: "#fff",
                padding: "1rem",
              }}
              className="d-flex justify-content-center"
            >
              Building Construction
            </Card.Header>
            <Card.Body
              className="d-flex justify-content-center flex-column"
              style={{
                color: "white",
                background: "rgba(2,2,2,0.5)",
                textAlign: "center",
              }}
            >
              <p>
                <b>Retail</b>
              </p>
              <p>
                <b>Healthcare</b>
              </p>
              <p>
                <b>Residential</b>
              </p>
              <p>
                <b>Warehouse and Industry</b>
              </p>
              <br />
              <Button
                onClick={() => handleCardClick()}
                style={{
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  borderColor: "#d46a6a",
                  color: "#fff",
                  width: "40%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Service 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
