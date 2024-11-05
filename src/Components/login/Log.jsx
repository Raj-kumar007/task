import React, { useState } from 'react';
import { IoEyeOffOutline } from "react-icons/io5";
import img_1 from "../../Assets/Image/sign.jpeg";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const VisiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const reset = () => {
    navigate("/reset");
  };

  const Login = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setMessage("Invalid email format");
      return;
    }

    if (email === 'user1@gmail.com' && password === 'user1234') {
      setMessage('Login successful');
      navigate("/dash");
    } else {
      setMessage('Email and password are invalid');
    }
  };

  return (
    <>
      <div className="login">
        <img src={img_1} alt="Form X logo" />
        <h1 className="rec-pass1">FORM X</h1>
        <div className="log">
          <form onSubmit={Login}>
            <div className="log-input">
              <div className="logIn-1">
                <h1>Log in to your Account</h1>
                <div className="login-pass1">
                  <label htmlFor="email">Username</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="login-pass1">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <IoEyeOffOutline className="pass-close" onClick={VisiblePassword}  />
                </div>
                <div className="forget">
                  <p onClick={reset}>Forget Password?</p>
                  <p>
                    Remember Me
                    <input type="checkbox" className="check" />
                  </p>
                </div>
                <button className="submit-btn" type="submit">SIGN IN</button>
              </div>
              <div className="or">
                <span></span>
                <p>OR</p>
                <span></span>
              </div>
              <div className="connect">
                <div className="log-media">
                  <div className="media-site">
                    <p>Log in with Google</p>
                  </div>
                  <div className="media-site">
                    <p>Log in with Facebook</p>
                  </div>
                </div>
                <div className="log-create">
                  <p>Create a Free account <span>New to Form X?</span></p>
                </div>
                {message && (<p className={message === 'Login successful' ? 'message1' : 'message'}>{message}</p>)}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Log;
