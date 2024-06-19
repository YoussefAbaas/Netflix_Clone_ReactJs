import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="top">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button
            className="loginButton"
            onClick={() => {
              navigate("/home");
            }}
          >
            Sign In
          </button>
          <span>
            New To Netflix?{" "}
            <b
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
