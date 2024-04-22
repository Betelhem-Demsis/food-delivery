import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="main">
      <p className="sign" align="center">
        Log in
      </p>
      <form className="form1">
        <input
          className="un"
          type="text"
          align="center"
          placeholder="Username"
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
        />
        <a className="submit" align="center">
          Log In
        </a>
        <p className="forgot" align="center">
          <a href="#">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
