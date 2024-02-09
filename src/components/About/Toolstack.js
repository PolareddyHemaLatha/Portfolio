import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJenkins, DiJira } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAutodesk,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiJenkins/>
      </Col>
    </Row>
  );
}

export default Toolstack;
