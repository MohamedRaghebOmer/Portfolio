import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bankDashboard from "../../Assets/Projects/bank-dashboard.png";
import dvldDashboard from "../../Assets/Projects/dvld-dashboard.png";
import smsSwagger from "../../Assets/Projects/sms-swagger2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Backend Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          A snapshot of systems focused on clean architecture and reliable
          backend workflows.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smsSwagger}
              isBlog={false}
              title="SMS - Supermarket Management System"
              description="Layered backend system for supermarket operations with JWT authentication, role and permission management, audit logging, sales and returns workflows, inventory tracking, and customer ledger support. Built with ASP.NET Core, ADO.NET, and SQL Server using clean architecture."
              ghLink="https://github.com/MohamedRaghebOmer/SMS-Supermarket-Management-System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvldDashboard}
              isBlog={false}
              title="DVLD - Driving & Vehicle License Department"
              description="Comprehensive desktop system for the full driving license lifecycle, including multi-stage tests, application validation, renewals, replacements, and regulatory compliance. Features a normalized SQL Server schema, stored procedures, and a robust business-rule engine."
              ghLink="https://github.com/MohamedRaghebOmer/DVLD-Driving-Vehicle-License-Department"
              demoLink="https://youtu.be/3lIlErl78XY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankDashboard}
              isBlog={false}
              title="Enterprise Bank Management System"
              description="Professional-grade C++ banking ecosystem with modular OOP architecture, a custom flat-file persistence engine, RBAC using bitwise permissions, and secure transaction workflows including deposits, transfers, and currency exchange."
              ghLink="https://github.com/MohamedRaghebOmer/Bank-Project"
              demoLink="https://youtu.be/nf8Ne5Q4CZU"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
