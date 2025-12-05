import React from "react";
import "./BuyerLogin.css";
import { FaFacebookF, FaGoogle, FaApple, FaEye } from "react-icons/fa";
import image7 from "../assets/image7.png";
import logo from '../assets/logo.png';

export default function BuyerLogin() {
  return (
    <div className="login-page">
     
      <nav className="login-navbar">
        <img src={logo} alt="logo" className="topbar-logo" />
        <div className="logo">Fabrics</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>SignUp</li>
          <li className="active">Login</li>
          <li>About Us</li>
        </ul>
      </nav>

     
      <div className="login-container">
        
        
        <div className="login-form-box">
          <h2 className="login-title">Login</h2>

          
          <div className="toggle-box">
            <button className="toggle-btn">Merchant</button>
            <button className="toggle-btn active">Buyer</button>
          </div>

          <p className="login-subtext">
            You're a step away from an awesome experience
          </p>

          <form className="login-form">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <div className="password-box">
              <input type="password" placeholder="Enter your password" />
              <FaEye className="eye-icon" />
            </div>

            <button className="login-btn">Login</button>
          </form>

          <p className="signup-text">
            Don't have an account? <span>Sign Up</span>
          </p>

          <div className="or-divider">Or</div>

          
          <div className="social-icons">
            <div className="icon facebook"><FaFacebookF /></div>
            <div className="icon google"><FaGoogle /></div>
            <div className="icon apple"><FaApple /></div>
          </div>

          <p className="support-text">
            Need Help? <span>Contact Us</span>
          </p>
        </div>

        
        <div className="login-image-box">
          <img src={image7} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}
