import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbaritems from "./Navbaritems";
export const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useNavigate();

  const AddUserInfo = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("email", email);
    formField.append("password", password);
    await axios({
      method: "POST",
      url: "http://localhost:8000/data/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      history("/LogIn");
    });
  };

  return (
    <div>
      <Navbaritems />
      <div className="container">
        <h1>SignUp</h1>
        <div className="form-group">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Event Name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-success mt-3 " onClick={AddUserInfo}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
