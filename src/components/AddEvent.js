import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Form } from "react-bootstrap";
import axios from "axios";

export const AddEvent = () => {
  const [datas, setdatas] = useState("");
  const { id } = useParams();
  const getdatas = async () => {
    const { data } = await axios.get(`http://localhost:8000/data/${id}`);
    setdatas(data);
    //     setdatas(id)
  };
  useEffect(() => {
    getdatas();
  }, []);

  const [image, setimage] = useState(null);
  const [user_id, setuser_id] = useState();
  const [Ename, setEname] = useState("");
  const [data, setdata] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [location, setlocation] = useState("");

  const history = useNavigate();
  const AddEventInfo = async () => {
    let formField = new FormData();
    formField.append("Ename", Ename);
    formField.append("data", data);
    formField.append("Date", Date);
    formField.append("Time", Time);
    formField.append("location", location);
    formField.append("image", image);
    formField.append("user_id", datas.id);
    await axios({
      method: "POST",
      url: "http://localhost:8000/api/",
      data: formField,
    }).then((response) => {
      console.log(response.data);

      history("/LogInUser/" + datas.id);
    });
  };
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
              {datas.email}
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <h1>AddEvent</h1>

        <div className="form-group">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Event title"
              name="Ename"
              value={Ename}
              onChange={(e) => setEname(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="location"
              name="location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Date"
              name="Date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control form-control-lg"
              placeholder="time"
              name="Time"
              value={Time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg"
              placeholder="image"
              name="image"
              src={image}
              onChange={(e) => setimage(e.target.files[0])}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              type="textarea"
              className="form-control form-control-lg"
              placeholder="About Event"
              name="data"
              value={data}
              onChange={(e) => setdata(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-success mt-3" onClick={AddEventInfo}>
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddEvent;
