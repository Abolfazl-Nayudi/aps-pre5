import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-3">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">signup</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/products">products</Nav.Link> */}

            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/authentication/signup"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              signup
            </NavLink>
            <NavLink
              to="/authentication/login"
              style={({ isActive }) => {
                if (isActive) {
                  return { color: "red", backgroundColor: "purple" };
                } else {
                  return { color: "black" };
                }
              }}
            >
              login
            </NavLink>
            <NavLink
              to="/products"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              products
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
