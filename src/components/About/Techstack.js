import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp, SiDotnet, SiSwagger } from "react-icons/si";
import Cpp from "../../Assets/TechIcons/C++.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp fontSize="28px" />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet fontSize="28px" />
        <div className="tech-icons-text">ASP.NET Core</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL Server" />
        <div className="tech-icons-text">SQL Server</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet fontSize="28px" />
        <div className="tech-icons-text">Entity Framework Core</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet fontSize="28px" />
        <div className="tech-icons-text">ADO.NET</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger fontSize="28px" />
        <div className="tech-icons-text">REST / Swagger</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
    </Row>
  );
}

export default Techstack;
