import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiPostman,
  SiVisualstudio,
  SiVisualstudiocode,
} from "react-icons/si";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio fontSize="28px" />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiVisualstudiocode fontSize="28px" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={SQL} alt="SQL Server" className="tech-icon-images" />
        <div className="tech-icons-text">SSMS / SQL Server</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiPostman fontSize="28px" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiGit fontSize="28px" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
