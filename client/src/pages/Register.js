import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="loginContainer">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username"></input>
        <input required type="text" placeholder="email"></input>
        <input required type="password" placeholder="password"></input>
        <button>Register</button>
        <span className="que">
          Do you have an account?
          <Link to="/login" className="login_link">
            login
          </Link>
        </span>
      </form>
    </div>
  );
}
