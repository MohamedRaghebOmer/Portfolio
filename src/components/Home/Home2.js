import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-casual.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Mohamed Ragheb Omer, an ASP.NET Core backend developer who
              builds strong, clean, and scalable systems.
              <br />
              <br />I specialize in
              <i>
                <b className="purple">
                  {" "}
                  C#, ASP.NET Core, SQL Server, and clean architecture{" "}
                </b>
              </i>
              with a focus on reliable APIs and data integrity.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  RESTful APIs, authentication & authorization, and scalable
                  backend architecture.{" "}
                </b>
              </i>
              I’m also expanding my web development skills to grow into a
              full-stack developer over time.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
