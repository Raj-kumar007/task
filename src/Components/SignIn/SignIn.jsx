import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "./signIn.css"
import img_1 from "../../Assets/Image/sign.jpeg"
import { IoEyeOffOutline } from "react-icons/io5";

const SignIn = () => {
  return (
    <>
    <div className='resetPassword'>
      <img src={img_1} alt="" />
      <h1 className='rec-pass1'>FORM X</h1>
    <div className='reset'>
    <MdOutlineKeyboardArrowLeft className='left-Arrow' />
    <div className="reset-input">
   <div className="reset-1">
   <h1>Reset Password</h1>
    <p>Password must include atleast 8 characters including 1 number and 1 special character</p>
  <div className='Password'>
  <p>New Password</p>
  <input type="password" placeholder='                                            Enter New Password' />
 <IoEyeOffOutline className='eye-close' />
  </div>
  <div className='Password'>
  <p>New Password</p>
  <input type="password" placeholder='                                            Enter New Password' />
 <IoEyeOffOutline className='eye-close1' />
  
  </div>
  
  <button className='submit-btn'>CONTINUE</button>
   </div>
    </div>
   

    </div>
    </div>
   
      
    </>
  )
}

export default SignIn
