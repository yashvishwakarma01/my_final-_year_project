import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-4">
      <h1>About Us</h1>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Our Company</Card.Title>
              <Card.Text>
                Our company is a service providing platform where any person
                belongs to any profession can register here and this platform
                provide him the work on the mobile. He does not have to go
                somewhere in order to find work. Consumer who needs someone for
                any work can hire from here. He has to enter the location and
                service needed. The application will provide the service
                provider at their nearby location. He can choose out of them
                which is giving the best deal.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                We have a experienced team dealing and working  with this sector for many years. They are experts in their field and they know
                We are a team of developers with different backgrounds but all
                having common goal that we want to make this world more
                interconnected by making people's life easier through our
                services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Email: clickeazzy.com <br />
                Phone: +91 1234567890 <br />
                Address: Civil Line Prayagraj
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
