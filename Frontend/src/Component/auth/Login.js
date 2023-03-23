import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ title, setLogin }) => {
  const [checkPatient, setCheckPatient] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckPatient({
      ...checkPatient,
      [name]: value,
    });
  };

  const login = async () => {
    await axios
      .post("http://localhost:8000/api/v1/login", checkPatient)
      .then((res) => {
        alert(res.data.message);
        setLogin(res.data.patient);
        navigate("/patient");
      });
  };

  return (
    <>
      <div className="login-box">
        <h2>Login as a {title}</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              value={checkPatient.email}
              required
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={checkPatient.password}
              required
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <NavLink to="" onClick={login}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
