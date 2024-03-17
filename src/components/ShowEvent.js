import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Navbaritems from "./Navbaritems";
const ShowEvent = () => {
  const [events, setevents] = useState([]);
  const getevents = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    setevents(response.data);
  };
  useEffect(() => {
    getevents();
  }, []);

  return (
    <div>
      <Navbaritems />
      <h1>Events</h1>
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
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowEvent;
