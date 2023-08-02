import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button className="login_btn">Login</button>
        <span className="que">
          Don't have an account?
          <Link to="/register" className="register_link">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
}
