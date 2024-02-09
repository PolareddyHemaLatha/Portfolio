import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imgtotext from "../../Assets/Projects/imgtotext.png";

import editor from "../../Assets/Projects/onlineeditor.png";
import course from "../../Assets/Projects/course.jpg"


import sorting from "../../Assets/Projects/sorting.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="Course Management System"
              description="The Java-based Course Management System employs a full-stack approach with MySQL. It enables administrators to manage courses, enrollments, and grades seamlessly. Leveraging Java's backend logic and MySQL for database storage, the system ensures efficient organization and accessibility of educational data, enhancing the overall course management process"
              ghLink="https://github.com/PolareddyHemaLatha/Course-Management-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting-Virtulization"
              description="Sorting-Visualization build with React that dynamically illustrates sorting algorithms like Bubble Sort and Quick Sort. Users can visualize the step-by-step process of sorting on a responsive web interface, enhancing understanding of algorithmic concepts through interactive and visually engaging animations."
              ghLink="https://github.com/PolareddyHemaLatha/Sorting-Virtulization"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="OnlineEditor.io"
              description="An online code editor build with HTML, CSS, and JavaScript, allowing users to write, edit, and run code snippets in real-time. Featuring a simple yet intuitive interface, it facilitates coding practice and experimentation with instant visual feedback, making learning and prototyping efficient and accessible."
              ghLink="https://github.com/PolareddyHemaLatha/own-online-code-editor"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgtotext}
              isBlog={false}
              title="ImgToText"
              description="Image-to-Text Converter done using React project utilizing OCR technology to extract text from images. Users can upload images, and the application converts them into editable text, enhancing accessibility and data extraction efficiency. The project leverages React's UI capabilities for a seamless and user-friendly experience."
              ghLink="https://github.com/PolareddyHemaLatha/ImgToTextConverter"
              
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
