import React, { useEffect, useState } from "react";
import { Navbar, Card } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Nav, Form, NavDropdown } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

export const LogInUser = () => {
  const [events, setevents] = useState([]);
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const userdata = [];

  const getevents = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    setevents(response.data);
  };
  useEffect(() => {
    getevents();
  }, []);

  //to put in userdata

  const getdata = async () => {
    const { data } = await axios.get(`http://localhost:8000/data/${id}`);
    setdata(data);
    //     setdatas(id)
  };
  useEffect(() => {
    getdata();
  }, []);

  // console.log(events[0])
  let flag = 0;
  events.map((event, index) => {
    if (event.user_id === data.id) {
      flag = 1;

      userdata.push(event);
    }
  });
  // console.log(userdata)

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Nav className="me-auto">
          <Navbar.Brand
            href="#"
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
            <NavLink to={`/addevent/${data.id}`} className="addevent">
              Add Event
            </NavLink>

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

            <Navbar.Brand
              href="#"
              style={{
                color: "red",
                fontSize: "20px",
                marginLeft: "10px",
                fontWeight: "500",
              }}
            >
              {data.email}
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {flag ? <h2>Your Events</h2> : <p></p>}
      <hr></hr>
      <div className="events mx-3">
        {userdata.map((userdata, index) => (
          <div>
            {
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={userdata.image} />
                <Card.Body>
                  <Card.Title>
                    <a href="#">{userdata.Ename}</a>
                  </Card.Title>
                  <Card.Text>
                    <pre>
                      {userdata.Date} Time {userdata.Time}
                    </pre>
                  </Card.Text>
                  <Card.Text>{userdata.location}</Card.Text>
                  <FontAwesomeIcon icon="fa-regular fa-heart" />
                </Card.Body>
              </Card>
            }
          </div>
        ))}
      </div>

      <h2 className="mt-3 text-dark">All Events</h2>
      <hr></hr>
      <div className="events">
        {events.map((events, index) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={events.image} />
              <Card.Body>
                <Card.Title>
                  <a href="#">{events.Ename}</a>
                </Card.Title>
                <Card.Text>
                  <pre>
                    {events.Date} Time {events.Time}
                  </pre>
                </Card.Text>
                <Card.Text>{events.location}</Card.Text>
                <FontAwesomeIcon icon="fa-regular fa-heart" />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LogInUser;
