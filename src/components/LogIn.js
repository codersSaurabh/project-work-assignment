import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbaritems from "./Navbaritems";
export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();

  const Submit = async (e) => {
    try {
      e.preventDefault();
      let actutalData = new FormData();
      actutalData.append("email", username);
      actutalData.append("password", password);

      const response = await axios({
        method: "POST",
        url: "http://localhost:8000/login/",
        data: actutalData,
      });

      if (response.data["token"] == "Email or Password is not Valid") {
        document.getElementsByClassName("msg")[0].innerHTML =
          "Email or Password is not Valid";
        history("/LogIn");
      } else {
        let id = response.data["token"]["id"];
        history("/LogInUser/" + id);
      }
    } catch (err) {
      if (username == "" || password == "") {
        document.getElementsByClassName("msg")[0].innerHTML =
          "something not filled";
        history("/LogIn");
      }
    }
  };

  return (
    <div>
      <Navbaritems />
      <div className="container">
        <p className="msg text-danger"></p>
        <h1>Log In</h1>
        <div className="form-group">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Event Name"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button className="btn btn-success mt-3 " onClick={Submit}>
            logIn
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
