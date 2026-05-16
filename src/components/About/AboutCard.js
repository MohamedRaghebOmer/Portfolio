import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mohamed Ragheb Omer</span>{" "}
            from <span className="purple">Egypt</span>.
            <br />
            I’m a{" "}
            <span className="purple">ASP.NET Core Backend Developer </span>
            who enjoys building strong, clean, and scalable systems.
            <br />I built a solid foundation in{" "}
            <span className="purple">C++ </span>
            before moving into <span className="purple">C#</span>, which helped
            me understand programming deeply from the start.
            <br />
            <br />
            Outside of coding, I focus on growing my skills and staying
            consistent with daily learning:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing clean API architectures
            </li>
            <li className="about-activity">
              <ImPointRight /> Database modeling and performance tuning
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess ♟️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Small steps every day create massive results over time."{" "}
          </p>
          <footer className="blockquote-footer">Mohamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
