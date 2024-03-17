import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav, Form, NavDropdown } from "react-bootstrap";

export const Navbaritems = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="me-auto">
          <Navbar.Brand
            href="/"
            style={{
              color: "red",
              fontSize: "20px",
              marginLeft: "10px",
              fontWeight: "500",
            }}
          >
            EventBrite
          </Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"> Event</Nav.Link>

            <NavDropdown
              title="Help"
              id="navbarScrollingDropdown"
              style={{ marginRight: "10px" }}
            >
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/LogIn">Login</Nav.Link>
            <Nav.Link href="/Register" style={{ marginRight: "20px" }}>
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbaritems;
