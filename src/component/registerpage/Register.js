import React from 'react'
import logo from "../../assets/image/logo-no-background.png";
import { Link } from 'react-router-dom';
import "../../CSS/register.css";
export default function Register() {
  return (
    <div className='register-container'>
      <img src={logo} alt="" className="logo"/>
      <h1>Register Here</h1>
      <p className='login-link'>Already have an account? <Link to="/Login">Login</Link></p>
      <form className='reg-form'>
        <div className="name"> 
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Confirm Password'/>
        <button className='register-button'> Create Account</button>
      </form>
    </div>
  )
}
