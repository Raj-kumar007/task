import React from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import img_1 from "../../Assets/Image/sign.jpeg"
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const Log = () => {
  const forget = useNavigate()
  function reset(params) {
    forget("/reset")
    
  }
  function dash(params) {
    forget("/dash")
  }
  return (
    <>
      <div className='login'>
        <img src={img_1} alt="" />
        <h1 className='rec-pass1'>FORM X</h1>
        <div className='log'>
          <div className="log-input">
            <div className="logIn-1">
              <h1>Log in to your Account </h1>
              <div className='login-pass1'>
                <p>Username</p>
                <input type="name" placeholder='                                                                    Enter Your Name' />
              </div>
              <div className='login-pass1'>
                <p>Password</p>
                <input type="password" placeholder='                                                              Enter Your Password' />
                <IoEyeOffOutline className='pass-close' />

              </div>
              <div className="forget">
                <p onClick={reset}>Forget Password ?</p>
                <p>Remember Me <input type='checkbox' className='check' /></p>
              </div>

              <button className='submit-btn' onClick={dash}>SIGN IN </button>
            </div>
            <div className='or'>
              <span></span>
              <p>OR</p>
              <span></span>
            </div>
            <div className="connect">
              <div className="log-media">
                <div className="media-site">
                  <img src="" alt="" />
                  <p> Log in with Google</p>
                </div>
                <div className="media-site">
                  <img src="" alt="" />
                  <p> Log in with Facebook</p>
                </div>
              </div>
              <div className="log-create">
                <p>Create  a Free  account  <span>New to Form X</span></p>
              </div>

            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Log
