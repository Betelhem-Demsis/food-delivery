import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/login.css'; 
import logo from "../../assets/image/logo-no-background.png";

export default function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="" className="logo"/>
      <h1>Welcome Back</h1>
      <p className="register-link">Don't have an account? <Link to="/register">Register</Link></p>
      <form className="login-form">
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
        <button className="login-button">Login</button>
      </form>
     
    </div>
  );
}

