import React from "react";
import { Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="d-flex flex-column">
        <ul className="footer__nav d-flex flex-wrap">
          <li className="footer__item">
            <a className="footer__link" a href="#about">
              About
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" a href="/careers">
              Careers
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" a href="/gallery">
              Gallery
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          &copy; 2023 MABOCAP. All Rights Reserved. <br />
          Developed by
          <a
            className="footer__link twitter-link"
            target="_blank"
            href="https://www.linkedin.com/in/stephen-hove-67847010a/"
          >
            {" "}
            Stephen Hove
          </a>{" "}
          and
          <a
            className="footer__link twitter-link"
            target="_blank"
            href="https://www.linkedin.com/in/isaiah-c-457322141/"
          >
            {" "}
            Isaiah Chiraira
          </a>
        </p>
      </Container>
    </footer>
  );
}
