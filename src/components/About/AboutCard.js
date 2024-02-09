import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemalatha Polareddy </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing my final year of B. Tech at K L University.
            <br />
            I have done my Summer Internship at Barclays as a full stack Developer
            <br />
            I have completed AWS Cloud Practioner Certificate and Red Hat Certified Enterprise Application Developer Certificate 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Language Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Interested in Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Full Stack Enchantress: Crafting Seamless Experiences from Server to Pixel."{" "}
          </p>
          <footer className="blockquote-footer">Hemalatha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
