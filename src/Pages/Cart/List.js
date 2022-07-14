import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Model/DataContext";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import "./List.css";

export default function List() {
  const [img, setImg, title, setTitle, body, setBody] = useContext(DataContext);
  // This function to change value of title attribute
  const TitleChange = () => {
    setTitle(document.getElementById("title").value);
  };
  const BodyChange = () => {
    setBody(document.getElementById("body").value);
  };
  return (
    <Container className="main">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={3} md={3} className="center-item">
          <img
            src="./1.png"
            className="card-img"
            onClick={() => setImg("1.png")}
          />
        </Col>
        <Col xs={3} md={3} className="center-item">
          <img
            src="./2.webp"
            className="card-img"
            onClick={() => setImg("2.webp")}
          />
        </Col>
        <Col xs={3} md={3} className="center-item">
          <img
            src="./3.png"
            className="card-img"
            onClick={() => setImg("3.png")}
          />
        </Col>
        <Col xs={3} md={3} className="center-item">
          <img
            src="./4.png"
            className="card-img"
            onClick={() => setImg("4.png")}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Title
            </InputGroup.Text>
            <Form.Control
              id="title"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={TitleChange}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Body
            </InputGroup.Text>
            <Form.Control
              id="body"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={BodyChange}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
