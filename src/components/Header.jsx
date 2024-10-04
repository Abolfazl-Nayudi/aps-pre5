import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import appleLogo from "/apple-logo.jpg";
import Navbar from "./Navbar";
import Button from "./Button";

export default function Header() {
  return (
    <header style={{ padding: "2rem 0" }}>
      <Container>
        <Row>
          <Col xs={2} style={{ display: "flex", justifyContent: "center" }}>
            <Image src={appleLogo} style={{ width: 100 }} />
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Navbar />
          </Col>
          <Col
            xs={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Button text="Login" background="crimson" color="white" />
            <Button text="Sign up" background="purple" color="white" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
