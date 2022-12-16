import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const About = () => {
  return (
    <Container style={{ marginTop: "3rem" }}>
      <Row>
        <Col xs={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta
          possimus accusamus sapiente quo explicabo quibusdam animi? Nostrum
          explicabo voluptatibus est, ipsa tempore officia repellendus neque.
          Voluptate ullam iste eius dignissimos quas libero explicabo sapiente
          impedit architecto sint, expedita et quidem, totam beatae vel eos?
          Ipsum sequi voluptas excepturi a.
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ marginTop: "2.5rem", width: "50rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#">
            <FacebookIcon
              href="#"
              fontSize="large"
              sx={{ mt: 3, mr: 2, cursor: "pointer" }}
            />
          </a>

          <a href="https://www.linkedin.com/in/%C5%9Fevket-metehan-parlak-663192239/">
            <LinkedInIcon
              fontSize="large"
              sx={{ mt: 3, mr: 2, cursor: "pointer" }}
            />
          </a>

          <a href="#">
            <TwitterIcon
              fontSize="large"
              sx={{ mt: 3, mr: 2, cursor: "pointer" }}
            />
          </a>

          <a href="https://github.com/smetehan">
            <GitHubIcon fontSize="large" sx={{ mt: 3, cursor: "pointer" }} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
