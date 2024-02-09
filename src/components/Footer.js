import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Hemalatha</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Hema</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/PolareddyHemaLatha"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hemalatha-polareddy/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="mailto:hema.latha5279@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMailBulk />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
